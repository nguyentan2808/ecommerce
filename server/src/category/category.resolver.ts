import { Resolver, Query, Mutation, Args, Int, ObjectType, Field } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

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

  @Mutation(() => String)
  removeCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.remove(id);
  }
}
