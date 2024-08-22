import { Request, Response, NextFunction } from "express";
import { HTTP_CODES } from "../../shared/codes";
import OrderService from "./service";

export class OrderController {
  static async createOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await OrderService.create(req.body.items);
      return res.status(HTTP_CODES.SUCCESS).json(order);
    } catch (error) {
      return next(error);
    }
  }

  static async getOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await OrderService.list();
      return res.status(HTTP_CODES.SUCCESS).json(orders);
    } catch (error) {
      return next(error);
    }
  }

  static async updateOrderStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await OrderService.updateOrderStatus(req.params.id, req.body.status); 
      return res.status(HTTP_CODES.SUCCESS).json(order);
    } catch (error) {
      return next(error);
    }
  }
}
