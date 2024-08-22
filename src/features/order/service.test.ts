import OrderService from './service';
import { ORDER_STATUS } from './model';

describe('OrderService', () => {
  beforeEach(() => {
    // Clear all orders before each test
    OrderService.orders = [];
  });

  it('should create a new order and return it', () => {
    const items = ['Burger', 'Fries'];
    const order = OrderService.create(items);

    expect(order).toBeDefined();
    expect(order.id).toBeDefined();
    expect(order.items).toEqual(items);
    expect(order.status).toBe(ORDER_STATUS.PENDING);
    expect(OrderService.orders).toContain(order);
  });

  it('should list all orders', () => {
    const items1 = ['Pizza'];
    const items2 = ['Pasta'];
    OrderService.create(items1);
    OrderService.create(items2);

    const orders = OrderService.list();

    expect(orders.length).toBe(2);
    expect(orders[0].items).toEqual(items1);
    expect(orders[1].items).toEqual(items2);
  });

  it('should retrieve an order by id', () => {
    const items = ['Soda'];
    const createdOrder = OrderService.create(items);

    const foundOrder = OrderService.get(createdOrder.id);

    expect(foundOrder).toBeDefined();
    expect(foundOrder?.id).toBe(createdOrder.id);
  });

  it('should return undefined if order not found by id', () => {
    const foundOrder = OrderService.get('non-existent-id');

    expect(foundOrder).toBeUndefined();
  });

  it('should update the status of an existing order', () => {
    const items = ['Salad'];
    const createdOrder = OrderService.create(items);

    const updatedOrder = OrderService.updateOrderStatus(createdOrder.id, ORDER_STATUS.READY);

    expect(updatedOrder.status).toBe(ORDER_STATUS.READY);
  });

  it('should throw an error when updating the status of a non-existent order', () => {
    expect(() => {
      OrderService.updateOrderStatus('non-existent-id', ORDER_STATUS.READY);
    }).toThrowError('Order not found');
  });
});
