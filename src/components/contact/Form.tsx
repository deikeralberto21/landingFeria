import React, { useState, type FormEvent } from 'react';

interface Formulario {
  fullName: string;
  title: string;
  phoneNumber: string;
  details: string;
}

const Formulario = () => {
  const [form, setForm] = useState<Formulario>({
    fullName: '',
    title: '',
    phoneNumber: '',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
    // Aquí puedes agregar tu lógica de envío
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 mt-15 gap-6 bg-[#E3E1DC] border border-[#B0AEAB] rounded-[14px] p-6 lg:p-8"
    >
      <div className="flex flex-col">
        <label className="mb-2 font-medium">Nombre completo</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Ingresa tu nombre completo"
          className="border border-[#C2C0BC] rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-appAccent transition-colors"
        />
      </div>
      
      <div className="flex flex-col">
        <label className="mb-2 font-medium">Asunto</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Asunto"
          className="border border-[#C2C0BC] rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-appAccent transition-colors"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-medium">Número telefónico</label>
        <input
          type="text"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          placeholder="Ingresa tu número"
          className="border border-[#C2C0BC] rounded-[10px] px-4 py-3 text-sm focus:outline-none focus:border-appAccent transition-colors"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-medium">¿Cómo podemos ayudarte?</label>
        <textarea
          name="details"
          value={form.details}
          onChange={handleChange}
          placeholder="Cuéntanos en qué podemos ayudarte..."
          className="border border-[#C2C0BC] rounded-[10px] px-4 py-3 text-sm h-32 lg:h-40 resize-none focus:outline-none focus:border-appAccent transition-colors"
        />
      </div>

      <button
        type="submit"
        className="bg-green-700 text-white rounded-[32px] py-3 px-6 text-sm font-medium hover:bg-appAccent/90 transition-colors w-full lg:w-auto"
      >
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
