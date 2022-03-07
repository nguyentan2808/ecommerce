import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  async create(createCategoryDto: CreateCategoryInput) {
    const { name } = createCategoryDto;

    const category = await this.categoryRepository.findOne({ where: { name } });
    if (category) {
      throw new ConflictException(`Category ${name} already exists`);
    }

    const newCategory = this.categoryRepository.create(createCategoryDto);
    await this.categoryRepository.save(newCategory);

    return newCategory;
  }

  async findAll({ limit, page }) {
    const _list = this.categoryRepository.find({
      skip: limit * (page - 1),
      take: limit,
    });

    const _total = this.categoryRepository.count();
    const [list, total] = await Promise.all([_list, _total]);

    return {
      list,
      total,
    };
  }

  async getProducts(id: number) {
    const category = await this.categoryRepository.findOne({
      where: { id },
      relations: ['products'],
    });
    if (!category) {
      throw new NotFoundException();
    }
    return category.products;
  }

  findOne(name: string) {
    return this.categoryRepository.findOne({ where: [{ name: name }] });
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  async remove(id: number) {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException();
    }
    await this.categoryRepository.remove(category);
    return true;
  }
}
