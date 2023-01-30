import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api'); // http://localhost:3000/api/
  await app.listen(process.env.APP_LISTEN_PORT || 3000);
}
bootstrap();
