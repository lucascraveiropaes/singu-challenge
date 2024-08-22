import { Request, Response, NextFunction } from "express";
import { HTTP_CODES } from "../codes";

interface CustomError extends Error {
  statusCode?: number;
}

export function errorHandler(
  err: CustomError, 
  req: Request, 
  res: Response, 
  next: NextFunction
) {
  const status = err.statusCode || HTTP_CODES.INTERNAL_SERVER_ERROR.code;
  const message = err.message || HTTP_CODES.INTERNAL_SERVER_ERROR.message;

  return res.status(status).json({ message });
}
