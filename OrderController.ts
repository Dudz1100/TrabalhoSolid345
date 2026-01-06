import { Request, Response } from 'express';
import { OrderService } from '../services/OrderService';
import { PrismaOrderRepository } from '../repositories/PrismaOrderRepository';
import { CreditCardPayment } from '../payments/CreditCardPayment'; // Ajuste o nome do arquivo se necessário
import { MailProvider } from '../providers/EtherealMailProvider';
import { NotificationService } from '../services/NotificationService';

export class OrderController {
  async processOrder(req: Request, res: Response) {
    try {
      const orderRepo = new PrismaOrderRepository();
      const payment = new CreditCardPayment();
      const mailProvider = new MailProvider();
      const notification = new NotificationService(mailProvider);

      const orderService = new OrderService(orderRepo, payment, notification);

      const order = await orderService.execute(req.body);
      return res.json(order);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}