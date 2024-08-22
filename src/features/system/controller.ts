import { Request, Response, NextFunction } from "express";
import { HTTP_CODES } from "../../shared/codes";

export default class SystemController {
  static async getAPIStatus(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(HTTP_CODES.SUCCESS).json({ statue: true, message: "All systems working!" });
    } catch (error) {
      return next(error);
    }
  }
}
