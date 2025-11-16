import dotenv from 'dotenv';

dotenv.config();

export const env = {
  CORS_ORIGIN: process.env.CORS_ORIGIN ?? '*',
  DATABASE_URL: process.env.DATABASE_URL ?? '',
  JWT_SECRET: process.env.JWT_SECRET ?? 'your_jwt_secret',
  LOGGING_ENABLED: process.env.LOGGING_ENABLED ?? false,
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT ?? 3000,
};
