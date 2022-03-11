import { Field, Float, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
@ObjectType()
export class ProductImage {
  @Field(() => Float)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  url: string;

  @Field(() => Product)
  @Column({ nullable: true })
  productId: number;

  // @Field()
  @ManyToOne(() => Product, (product) => product.images, { onDelete: 'SET NULL' })
  product: Product;
}
