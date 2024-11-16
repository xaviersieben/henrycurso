import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Product from "./product";

@Entity({ name: "categories" })
class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}

export default Category;
