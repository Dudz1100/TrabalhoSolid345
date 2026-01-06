import { IMailProvider } from '../providers/IMailProvider';

export class NotificationService {
  constructor(private mailProvider: IMailProvider) {}

  async sendOrderConfirmation(email: string, orderId: number, total: number) {
    await this.mailProvider.sendEmail(
      email,
      `Pedido #${orderId} Confirmado`,
      `Seu pedido no valor de R$ ${total} foi processado.`
    );
  }
}