import { CategoryModule } from './../category/category.module';
import { ProductImage } from './entities/product-image.entity';
import { Product } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage])],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
