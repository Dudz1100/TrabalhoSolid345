import { IProduct } from './IProduct';

export class PhysicalProduct implements IProduct {
  constructor(public price: number) {}
  calculatePrice(quantity: number): number {
    return (this.price * quantity) + 10; // Frete fixo para físico
  }
}