import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { v4 as uuid } from 'uuid';

import { PrismaClient } from '@prisma/client';
import { PrismaService } from './services/data/prisma.service';

const prisma = new PrismaClient();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  prisma.user.create({
    data: {
      name: '',
      lastname: '',
      mail: '',
      password: '',
      uuid: '',
    },
  });
}
bootstrap();
