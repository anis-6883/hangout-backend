import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  environment: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 8080,
  frontendUrl: process.env.FRONTEND_URL,
}));
