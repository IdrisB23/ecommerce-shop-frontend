import {Category} from '../../category/models/category.interface';
import {Image} from '../../image/models/image.inteface';

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  inventory: number;
  description: string;
  category: Category;
  images: Image[];
}
