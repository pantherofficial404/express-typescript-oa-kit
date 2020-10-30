import { Request, Response, NextFunction } from "express";

export const notFoundMiddleware = (_: Request, res: Response) => {
  return res.status(404).json({
    message: "Not found",
  });
};
