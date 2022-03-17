import { Field, Float, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './../../category/entities/category.entity';
import { ProductImage } from './product-image.entity';

enum ProductStatus {
  PUBLISH = 'PUBLISH',
  PRIVATE = 'PRIVATE',
}

enum ProductType {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
}

@ObjectType()
@Entity()
export class Product {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ nullable: true })
  description: string;

  @Field(() => Float)
  @Column({ type: 'float', nullable: true })
  price: number;

  @Field(() => Float)
  @Column({ type: 'float', nullable: true })
  quantity: number;

  @Field()
  @Column({ type: 'enum', enum: ProductStatus, default: ProductStatus.PUBLISH })
  status: string;

  @Field()
  @Column({ type: 'enum', enum: ProductType, default: ProductType.AVAILABLE })
  type: string;

  // @Field(() => [ProductImage])
  @OneToMany(() => ProductImage, (productImage) => productImage.product)
  images: ProductImage[];

  // @Field(() => [Category])
  @ManyToMany(() => Category, (category) => category.products, { onDelete: 'SET NULL' })
  @JoinTable({ name: 'product_categories' })
  categories: Category[];

  @Field()
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
