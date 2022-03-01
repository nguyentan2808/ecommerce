import { Category } from './entities/category.entity';
import { Injectable, ConflictException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const { name } = createCategoryDto;

    const category = await this.categoryRepository.findOne({ where: { name } });
    if (category) {
      throw new ConflictException(`Category ${name} already exists`);
    }

    const newCategory = this.categoryRepository.create(createCategoryDto);
    await this.categoryRepository.save(newCategory);

    return newCategory;
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(name: string) {
    console.log(name);
    return this.categoryRepository.findOne({ where: [{ name: name }] });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
