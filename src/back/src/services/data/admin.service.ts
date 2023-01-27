import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { admin } from '@prisma/client';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}
  async createAdmin(data: admin): Promise<admin> {
    return this.prisma.admin.create({
      data,
    });
  }
}
