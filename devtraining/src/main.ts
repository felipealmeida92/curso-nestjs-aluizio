import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //ignora propriedades que não estão no DTO
    forbidNonWhitelisted: true, // caso tenha uma propriedade indevida a requisição é recusada
    transform: true, // transformar o tipo de dado ex. string -> number
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
