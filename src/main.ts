import { NestFactory } from '@nestjs/core';
import { AppModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
