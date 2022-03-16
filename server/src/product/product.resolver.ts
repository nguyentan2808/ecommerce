import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  ObjectType,
  Field,
} from '@nestjs/graphql';
import { Category } from './../category/entities/category.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ProductImage } from './entities/product-image.entity';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@ObjectType()
export default class GetProductsResponse {
  @Field(() => [Product])
  list: Product[];

  @Field(() => Int)
  total: number;
}

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  createProduct(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productService.create(createProductInput);
  }

  @Query(() => GetProductsResponse, { name: 'products' })
  findAll(@Args('limit') limit: number, @Args('page') page: number) {
    return this.productService.findAll({ limit, page });
  }

  @Query(() => Product, { name: 'product', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productService.update(updateProductInput.id, updateProductInput);
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.remove(id);
  }

  @ResolveField(() => [ProductImage])
  images(@Parent() product: Product) {
    return this.productService.getImages(product.id);
  }

  @ResolveField(() => [Category])
  categories(@Parent() product: Product) {
    return this.productService.getCategories(product.id);
  }
}
