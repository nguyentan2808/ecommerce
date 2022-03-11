import { Category } from './../../category/entities/category.entity';
import { ProductImage } from './../entities/product-image.entity';
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';
import { FileUpload } from 'graphql-upload';

@InputType()
export class CreateProductInput {
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @Field(() => String)
  description: string;

  @IsNotEmpty()
  @Field(() => Int)
  @IsInt()
  price: number;

  @IsNotEmpty()
  @Field(() => Int)
  quantity: number;

  @IsNotEmpty()
  @Field(() => String)
  status: string;

  @IsNotEmpty()
  @Field(() => String)
  type: string;

  @IsNotEmpty()
  @Field(() => [String])
  images: string[];

  @IsNotEmpty()
  @Field(() => [String])
  categories: string[];
}
