import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CategoryRepository } from './repositories/category.repository';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryRepository.findByName(
      createCategoryDto.name,
    );
    if (category) throw new BadRequestException('Categoria já existe');
    return this.categoryRepository.create(createCategoryDto.name);
  }

  async findAll() {
    return this.categoryRepository.findAll();
  }

  async findById(id: string) {
    const category = await this.categoryRepository.findById(id);
    if (!category) throw new NotFoundException('Categoria não encontrada');
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.findByName(
      updateCategoryDto.name,
    );
    if (category) throw new BadRequestException('Categoria já existe');
    await this.findById(id);
    return this.categoryRepository.update(id, updateCategoryDto.name);
  }

  async delete(id: string) {
    await this.findById(id);
    return this.categoryRepository.delete(id);
  }
}
