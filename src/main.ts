import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.use(compression());

  app.enableCors({
    origin: ['*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
    allowHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      'Origin',
      'Host',
      'Content-Length',
    ],
  });

  await app.listen(process.env.PORT || 8080);
}

bootstrap().catch((err) => console.error(err));
