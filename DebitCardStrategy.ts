import { IPaymentProcessor } from '../interfaces/IPaymentProcessor';
import logger from '../lib/logger';

export class DebitCardStrategy implements IPaymentProcessor {
  async process(amount: number, details: any): Promise<void> {
    logger.info(`Processando Débito: R$ ${amount}`);
    // Lógica fictícia de débito
  }
}