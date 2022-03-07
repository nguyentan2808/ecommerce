import { Category } from './../../category/entities/category.entity';
import { Field, ObjectType, ResolveField } from '@nestjs/graphql';
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
import { ProductImage } from './product-image.entity';

enum ProductStatus {
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

  @Field()
  @Column({ nullable: true })
  price: number;

  @Field()
  @Column({ nullable: true })
  quantity: number;

  @Field()
  @Column({ type: 'enum', enum: ProductStatus, default: ProductStatus.AVAILABLE })
  status: string;

  @OneToMany(() => ProductImage, (productImage) => productImage.product)
  @Field(() => [ProductImage])
  images: ProductImage[];

  @Field(() => [Category])
  @ManyToMany(() => Category, (category) => category.products)
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
