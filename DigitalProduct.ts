import { IProduct } from './IProduct';

export class DigitalProduct implements IProduct {
  constructor(public price: number) {}
  calculatePrice(quantity: number): number {
    return this.price * quantity; // Sem frete para digital
  }
}