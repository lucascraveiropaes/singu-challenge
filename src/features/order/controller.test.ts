import { Request, Response, NextFunction } from "express";
import { OrderController } from "./controller";
import OrderService from "./service";
import { HTTP_CODES } from "../../shared/codes";

describe("OrderController", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let statusMock: jest.Mock;

  beforeEach(() => {
    OrderService.orders = []; // Clear all orders before each test

    statusMock = jest.fn().mockReturnValue({
      json: jest.fn(),
    });

    mockRequest = {};
    mockResponse = {
      status: statusMock,
    } as Partial<Response>;

    mockNext = jest.fn();
  });

  it("should create a new order", async () => {
    mockRequest = {
      body: {
        items: ["Burger", "Fries"],
      },
    };

    await OrderController.createOrder(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(HTTP_CODES.SUCCESS);
    expect(statusMock().json).toHaveBeenCalledWith(
      expect.objectContaining({
        items: ["Burger", "Fries"],
        status: "pending",
      })
    );
  });

  it("should retrieve all orders", async () => {
    OrderService.create(["Pizza"]);
    OrderService.create(["Pasta"]);

    await OrderController.getOrders(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(HTTP_CODES.SUCCESS);
    expect(statusMock().json).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ items: ["Pizza"] }),
        expect.objectContaining({ items: ["Pasta"] }),
      ])
    );
  });

  it("should update the status of an order", async () => {
    const order = OrderService.create(["Salad"]);
    mockRequest = {
      params: { id: order.id },
      body: { status: "ready" },
    };

    await OrderController.updateOrderStatus(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).toHaveBeenCalledWith(HTTP_CODES.SUCCESS);
    expect(statusMock().json).toHaveBeenCalledWith(
      expect.objectContaining({ status: "ready" })
    );
  });

  it("should return 404 if the order is not found when updating status", async () => {
    mockRequest = {
      params: { id: "non-existent-id" },
      body: { status: "ready" },
    };

    await OrderController.updateOrderStatus(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(statusMock).not.toHaveBeenCalled();
    expect(statusMock().json).not.toHaveBeenCalled();
    expect(mockNext).toHaveBeenCalledWith(
      expect.objectContaining({ message: "Order not found" })
    );
  });
});
