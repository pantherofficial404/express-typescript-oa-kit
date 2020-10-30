import express from 'express';
import { AuthError } from '../utils';

export const errorHandler = (
  err: unknown,
  _: express.Request,
  res: express.Response,
  next: express.NextFunction
): express.Response | void => {
  if (err instanceof AuthError) {
    return res.status(422).json({
      message: 'Invalid token'
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
  next();
};
