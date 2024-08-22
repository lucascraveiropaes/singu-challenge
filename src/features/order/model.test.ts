import Order, { ORDER_STATUS, StatusType } from "./model";

describe("Order Model", () => {
  it("should create a new order with pending status", () => {
    const items = ["Pizza", "Soda"];
    const order = new Order(items);

    expect(order.id).toBeDefined();
    expect(order.items).toEqual(items);
    expect(order.status).toBe(ORDER_STATUS.PENDING);
  });

  it("should allow status to be updated to a valid status", () => {
    const items = ["Burger"];
    const order = new Order(items);

    order.setStatus(ORDER_STATUS.READY);
    expect(order.status).toBe(ORDER_STATUS.READY);

    order.setStatus(ORDER_STATUS.DELIVERED);
    expect(order.status).toBe(ORDER_STATUS.DELIVERED);
  });

  it("should throw an error if an invalid status is provided", () => {
    const items: string[] = ["Fries"];
    const order = new Order(items);

    expect(() => {
      order.setStatus("invalid status" as StatusType);
    }).toThrowError("Invalid status");
  });
});
