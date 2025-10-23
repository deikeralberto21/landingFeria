// 1. Importar las utilidades de `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Definir un `type` y `schema` para cada colección
const postCollection = defineCollection({
  type: 'content', // v2.5.0 y posteriores
  schema: z.object({
    title: z.string(),
    img: z.string().optional(),
    subtitle: z.string().optional(),
    imgsContent: z.array(z.string()),
  }),
});

// 3. Exportar un único objeto `collections` para registrar tu(s) colección(es)
export const collections = {
  'post': postCollection,
};