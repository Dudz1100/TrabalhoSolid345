import { IPaymentMethod } from './IPaymentMethod';
import logger from '../lib/logger';

export class PixPayment implements IPaymentMethod {
  async process(amount: number, details: any): Promise<void> {
    logger.info(`Gerando QR Code Pix no valor de R$ ${amount}`);
    // Simulação de geração de chave Pix
  }
}