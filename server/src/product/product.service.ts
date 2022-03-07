import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CategoryService } from './../category/category.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ProductImage } from './entities/product-image.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(ProductImage) private productImageRepository: Repository<ProductImage>
  ) {}

  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  getImages(id: number) {
    return this.productImageRepository.find({ where: { productId: id } });
  }

  async getCategories(id: number) {
    return getConnection().createQueryBuilder().relation(Product, 'categories').of(id).loadMany();
  }

  // async test() {
  //   const category = await this.categoryService.findOne('Jordan');
  //   const product = await this.productRepository.findOne({
  //     where: { name: 'Product 1' },
  //     relations: ['categories'],
  //   });

  //   product.categories.push(category);
  //   // const product = new Product();
  //   // product.name = 'Product 2';
  //   // product.categories = [category];

  //   await this.productRepository.save(product);
  //   return true;
  // }

  // async test() {
  //   const photo1 = new ProductImage();
  //   photo1.url = 'me.jpg';
  //   await this.productImageRepository.save(photo1);

  //   const photo2 = new ProductImage();
  //   photo2.url = 'me-and-bears.jpg';
  //   await this.productImageRepository.save(photo2);

  //   const product = new Product();
  //   product.name = 'John';
  //   product.images = [photo1, photo2];
  //   await this.productRepository.save(product);

  //   // await this.productRepository.delete({ id: 2 });

  //   return true;
  // }
}
