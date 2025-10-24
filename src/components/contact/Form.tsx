import React, { useState, type FormEvent } from 'react';

interface Formulario {
  fullName: string;
  title: string;
  phoneNumber: string;
  details: string;
}

interface Errores {
  fullName?: string;
  title?: string;
  phoneNumber?: string;
  details?: string;
}

const Formulario = () => {
  const [form, setForm] = useState<Formulario>({
    fullName: '',
    title: '',
    phoneNumber: '',
    details: '',
  });

  const [errores, setErrores] = useState<Errores>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mensaje, setMensaje] = useState<{ tipo: 'success' | 'error' | null; texto: string }>({ tipo: null, texto: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Filtrar caracteres no permitidos en tiempo real
    const valorFiltrado = value.replace(/[^a-zA-Z0-9\s]/g, '');
    
    setForm(prev => ({ ...prev, [name]: valorFiltrado }));

    // Validar en tiempo real y actualizar errores
    validarCampo(name as keyof Formulario, valorFiltrado);
  };

  const validarCampo = (campo: keyof Formulario, valor: string) => {
    let error: string | undefined;

    switch (campo) {
      case 'fullName':
        if (!valor.trim()) {
          error = 'El nombre completo es requerido';
        } else if (valor.trim().length < 2) {
          error = 'El nombre debe tener al menos 2 caracteres';
        }
        break;
      
      case 'title':
        if (!valor.trim()) {
          error = 'El asunto es requerido';
        } else if (valor.trim().length < 3) {
          error = 'El asunto debe tener al menos 3 caracteres';
        }
        break;
      
      case 'phoneNumber':
        if (!valor.trim()) {
          error = 'El número telefónico es requerido';
        } else if (!/^[0-9\s]{7,15}$/.test(valor.trim())) {
          error = 'Solo se permiten números y espacios';
        }
        break;
      
      case 'details':
        if (!valor.trim()) {
          error = 'Los detalles son requeridos';
        } else if (valor.trim().length < 10) {
          error = 'Los detalles deben tener al menos 10 caracteres';
        }
        break;
    }

    setErrores(prev => ({ ...prev, [campo]: error }));
  };

  // Verificar si todos los campos son válidos
  const esFormularioValido = () => {
    return (
      form.fullName.trim().length >= 2 &&
      form.title.trim().length >= 3 &&
      form.phoneNumber.trim().length >= 7 &&
      /^[0-9\s]{7,15}$/.test(form.phoneNumber.trim()) &&
      form.details.trim().length >= 10 &&
      Object.values(errores).every(error => !error)
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!esFormularioValido()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.fullName,
          phone: form.phoneNumber,
          title: form.title,
          body: form.details,
        }),
      });

      if (response.ok) {
        // Limpiar formulario después del envío exitoso
        setForm({
          fullName: '',
          title: '',
          phoneNumber: '',
          details: '',
        });
        setErrores({});
        setMensaje({ tipo: 'success', texto: '¡Mensaje enviado correctamente!' });
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          setMensaje({ tipo: null, texto: '' });
        }, 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje({ tipo: 'error', texto: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' });
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        setMensaje({ tipo: null, texto: '' });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Mensaje de éxito o error */}
      {mensaje.tipo && (
        <div className={`mb-4 p-4 rounded-[10px] text-sm font-medium ${
          mensaje.tipo === 'success' 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {mensaje.texto}
        </div>
      )}
      
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 mt-15 gap-6 bg-[#E3E1DC] border text-black border-[#B0AEAB] rounded-[14px] p-6 lg:p-8"
      >
      <div className="flex flex-col">
        <label className="mb-2 font-medium">Nombre completo</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Ingresa tu nombre completo"
          className={`border rounded-[10px] px-4 py-3 text-sm focus:outline-none transition-colors ${
            errores.fullName 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-[#C2C0BC] focus:border-appAccent'
          }`}
        />
        {errores.fullName && (
          <span className="text-red-500 text-xs mt-1">{errores.fullName}</span>
        )}
      </div>
      
      <div className="flex flex-col">
        <label className="mb-2 font-medium">Asunto</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Asunto"
          className={`border rounded-[10px] px-4 py-3 text-sm focus:outline-none transition-colors ${
            errores.title 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-[#C2C0BC] focus:border-appAccent'
          }`}
        />
        {errores.title && (
          <span className="text-red-500 text-xs mt-1">{errores.title}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-medium">Número telefónico</label>
        <input
          type="text"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          placeholder="Ingresa tu número"
          className={`border rounded-[10px] px-4 py-3 text-sm focus:outline-none transition-colors ${
            errores.phoneNumber 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-[#C2C0BC] focus:border-appAccent'
          }`}
        />
        {errores.phoneNumber && (
          <span className="text-red-500 text-xs mt-1">{errores.phoneNumber}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-medium">¿Cómo podemos ayudarte?</label>
        <textarea
          name="details"
          value={form.details}
          onChange={handleChange}
          placeholder="Cuéntanos en qué podemos ayudarte..."
          className={`border rounded-[10px] px-4 py-3 text-sm h-32 lg:h-40 resize-none focus:outline-none transition-colors ${
            errores.details 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-[#C2C0BC] focus:border-appAccent'
          }`}
        />
        {errores.details && (
          <span className="text-red-500 text-xs mt-1">{errores.details}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={!esFormularioValido() || isSubmitting}
        className={`rounded-[32px] py-3 px-6 text-sm font-medium transition-colors w-full lg:w-auto ${
          esFormularioValido() && !isSubmitting
            ? 'bg-amber-400 hover:bg-amber-500 text-white hover:bg-appAccent/90 cursor-pointer'
            : 'bg-gray-400 text-gray-600 cursor-not-allowed'
        }`}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
    </div>
  );
};

export default Formulario;
