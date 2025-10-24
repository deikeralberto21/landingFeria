// src/lib/prisma.ts
import { config } from 'dotenv';
import path from 'path';

// Cargar variables de entorno
config({ path: path.resolve(process.cwd(), '.env') });

// Verificar y asignar DATABASE_URL si no existe
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = 'mysql://root:@127.0.0.1:3306/feria';
  console.log('🔧 Usando DATABASE_URL por defecto en prisma.ts');
}

import { PrismaClient } from '../generated/prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma || new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
