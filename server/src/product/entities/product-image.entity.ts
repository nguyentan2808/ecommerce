import { Field, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
@ObjectType()
export class ProductImage {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  url: string;

  @Field()
  @Column()
  productId: number;

  // @Field()
  @ManyToOne(() => Product, (product) => product.images, { onDelete: 'SET NULL' })
  product: Product;
}
