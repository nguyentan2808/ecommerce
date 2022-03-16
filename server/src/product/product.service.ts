import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
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

  async create(createProductInput: CreateProductInput) {
    // const product = this.productRepository.create(createProductInput);
    const { images } = createProductInput;

    const result = await Promise.all(
      [...images].map((item) => {
        const productImage = new ProductImage();
        productImage.url = item;
        return this.productImageRepository.save(productImage);
      })
    );

    const product = new Product();

    Object.assign(product, createProductInput);
    product.images = result;

    console.log(product);
    await this.productRepository.save(product);
    return product;
  }

  async findAll({ limit, page }) {
    const _list = this.productRepository.find({
      relations: ['categories', 'images'],
      skip: limit * (page - 1),
      take: limit,
    });

    const _total = this.productRepository.count();
    const [list, total] = await Promise.all([_list, _total]);

    return {
      list,
      total,
    };
  }

  findOne(id: number) {
    return this.productRepository.findOne({
      where: { id },
      relations: ['categories', 'images'],
    });
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  getImages(id: number) {
    console.log(id);
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
