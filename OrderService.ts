import { PrismaClient } from '@prisma/client';
import { IOrderRepository } from '../payments/IOrderRepository';
import { IPaymentMethod } from '../payments/IPaymentMethod';
import { NotificationService } from './NotificationService';
import { ProductFactory } from '../domain/ProductFactory';

const prisma = new PrismaClient();

export class OrderService {
  constructor(
    private orderRepo: IOrderRepository,
    private paymentMethod: IPaymentMethod,
    private notification: NotificationService
  ) {}

  async execute(data: any) {
    let totalAmount = 0;
    const itemsDetails = [];

    for (const item of data.items) {
      const productData = await prisma.product.findUnique({ where: { id: item.productId } });
      if (!productData) throw new Error("Produto não encontrado");

      // Uso da Factory e Domain (SOLID Puro)
      const productDomain = ProductFactory.create(productData.type, productData.price);
      totalAmount += productDomain.calculatePrice(item.quantity);
      
      itemsDetails.push({ ...productData, quantity: item.quantity });
    }

    await this.paymentMethod.process(totalAmount, data.paymentDetails);

    const order = await this.orderRepo.save({
      customer: data.customer,
      items: itemsDetails,
      total: totalAmount
    });

    await this.notification.sendOrderConfirmation(data.customer, order.id, totalAmount);

    return order;
  }
}