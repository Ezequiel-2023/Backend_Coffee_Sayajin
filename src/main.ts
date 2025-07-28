import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:8081', // Dirección del frontend
    credentials: true,
  });
  await app.listen(4000); // Direccion backend
}
bootstrap().catch((err) => {
  console.error('Error during bootstrap:', err);
});
