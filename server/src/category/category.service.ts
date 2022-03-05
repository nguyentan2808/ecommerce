import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Injectable, ConflictException } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Repository } from 'typeorm';

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

  findOne(name: string) {
    return this.categoryRepository.findOne({ where: [{ name: name }] });
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  async remove(id: number) {
    await this.categoryRepository.delete(id);
    return 'Oke';
  }
}
