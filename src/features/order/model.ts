export type StatusType = ORDER_STATUS[keyof ORDER_STATUS];
export enum ORDER_STATUS {
  PENDING = "pending",
  PREPARATION = "in preparation",
  READY = "ready",
  DELIVERED = "delivered",
}

export class Order {
  id: string;
  items: [];
  status: StatusType;

  constructor(items: any) {
      this.id = Date.now().toString();
      this.items = items;
      this.status = ORDER_STATUS.PENDING;
  }

  setStatus(newStatus: StatusType) {
    const allowedStatuses: StatusType[] = Object.values(ORDER_STATUS);

    if (!allowedStatuses.includes(newStatus))
      throw new Error("Invalid status");
    
    this.status = newStatus;
  }
}

export default Order;