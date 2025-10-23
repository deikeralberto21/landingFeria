// src/pages/api/save.ts
import type { APIRoute } from "astro";
import { prisma } from '../../lib/prisma';

// Configurar como server-rendered
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Verificar que el request tenga contenido
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(JSON.stringify({ 
        error: 'Content-Type debe ser application/json' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let requestBody;
    try {
      requestBody = await request.json();
    } catch (jsonError) {
      console.error('Error parsing JSON:', jsonError);
      return new Response(JSON.stringify({ 
        error: 'JSON inválido en el request' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { name, phone, title, body } = requestBody;

    // Validar que todos los campos requeridos estén presentes
    if (!name || !phone || !title || !body) {
      return new Response(JSON.stringify({ 
        error: 'Todos los campos son requeridos' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const user = await prisma.user.create({
      data: {
        name,
        phone,
        title,
        body,
      },
    });

    return new Response(JSON.stringify({ 
      success: true, 
      user 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    return new Response(JSON.stringify({ 
      error: 'Error interno del servidor' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
