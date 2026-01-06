import { PhysicalProduct } from './PhysicalProduct';
import { DigitalProduct } from './DigitalProduct';
import { IProduct } from './IProduct';

export class ProductFactory {
  static create(type: string, price: number): IProduct {
    if (type === 'physical') return new PhysicalProduct(price);
    return new DigitalProduct(price);
  }
}