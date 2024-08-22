import Order, { StatusType } from "./model";

class OrderService {
  orders: Order[];

  constructor() {
    this.orders = [];
  }

  create(items: any) {
    const order = new Order(items);
    this.orders.push(order);
    
    return order;
  }

  list() {
    return this.orders;
  }

  get(id: string): Order | undefined {
    return this.orders.find(order => order.id === id);
  }

  updateOrderStatus(id: string, status: StatusType) {
    const order = this.get(id);

    if (!order)
      throw Object.assign(new Error("Order not found"), { statusCode: 404 });

    order.setStatus(status);
    return order;
  }
}

export default new OrderService();
