import { PrismaClient } from '@prisma/client';
import { IOrderRepository } from './IOrderRepository';

const prisma = new PrismaClient();

export class PrismaOrderRepository implements IOrderRepository {
  async save(orderData: any): Promise<any> {
    return await prisma.order.create({
      data: {
        customer: orderData.customer,
        items: JSON.stringify(orderData.items),
        total: orderData.total,
        status: 'confirmed'
      }
    });
  }
}