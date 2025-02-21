import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { Category } from '@prisma/client';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(name: string): Promise<Category> {
    return this.prisma.category.create({ data: { name } });
  }

  async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async findById(id: string): Promise<Category | null> {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async update(id: string, name: string): Promise<Category> {
    return this.prisma.category.update({
      where: { id },
      data: { name },
    });
  }

  async delete(id: string): Promise<Category> {
    return this.prisma.category.delete({ where: { id } });
  }

  async findByName(name: string): Promise<Category | null> {
    return this.prisma.category.findUnique({ where: { name } });
  }
}
