export interface IOrderRepository {
  save(orderData: any): Promise<any>;
}