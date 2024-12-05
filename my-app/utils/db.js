import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: './.env.local' });

const sql = neon(process.env.NEXT_PUBLIC_POSTGRES_URL);
export const db = drizzle({client:sql}, { schema });