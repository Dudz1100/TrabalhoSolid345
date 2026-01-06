export interface IPaymentProcessor {
  process(amount: number, details: any): Promise<void>;
}