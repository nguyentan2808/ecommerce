import { Field, Float, InputType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateProductInput {
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
