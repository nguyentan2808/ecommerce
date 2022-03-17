import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType, Float, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @IsNotEmpty()
  @Field(() => Float)
  id: number;

  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @Field(() => String)
  description: string;

  @IsNotEmpty()
  @Field(() => Float)
  price: number;

  @IsNotEmpty()
  @Field(() => Float)
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
