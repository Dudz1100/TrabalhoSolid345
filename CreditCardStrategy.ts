import { IPaymentProcessor } from '../interfaces/IPaymentProcessor';
import logger from '../lib/logger';

export class CreditCardStrategy implements IPaymentProcessor {
  async process(amount: number, details: any): Promise<void> {
    logger.info(`Pagamento via Cartão: R$ ${amount}`);
    if (details.cvv === '000') throw new Error('Cartão recusado');
  }
}