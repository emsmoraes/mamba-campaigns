import { Module } from '@nestjs/common';
import { CategoryController } from './categories.controller';
import { CategoryService } from './categories.service';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CategoryRepository } from './repositories/category.repository';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository, PrismaService],
})
export class CategoriesModule {}
