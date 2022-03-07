import { Product } from './../product/entities/product.entity';
import {
  Args,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  ResolveField,
  Resolver,
  Parent,
} from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@ObjectType()
export default class GetCategoriesResponse {
  @Field(() => [Category])
  list: [Category];

  @Field(() => Int)
  total: number;
}

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  createCategory(@Args('createCategoryInput') createCategoryInput: CreateCategoryInput) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() => GetCategoriesResponse, { name: 'categories' })
  findAll(@Args('limit') limit: number, @Args('page') page: number) {
    return this.categoryService.findAll({ limit, page });
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args('name', { type: () => String }) name: string) {
    return this.categoryService.findOne(name);
  }

  @Mutation(() => Category)
  updateCategory(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput) {
    return this.categoryService.update(updateCategoryInput.id, updateCategoryInput);
  }

  @Mutation(() => Boolean)
  removeCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.remove(id);
  }

  @ResolveField(() => [Product])
  products(@Parent() category: Category) {
    return this.categoryService.getProducts(category.id);
  }
}
