import { Request } from "express";
import Jwt from "jsonwebtoken";
import Config from "config";
import { AuthError, ERROR_MESSAGE } from "../utils";

export const expressAuthentication = (
  request: Request,
  securityName: string,
  scope: string[]
) => {
  const token = <string>request.headers["x-access-token"];

  return new Promise(async (resolve, reject) => {
    if (!token) {
      return reject(new AuthError(ERROR_MESSAGE.INVALID_JWT_TOKEN));
    }
    try {
      const response = Jwt.verify(token, Config.get("JWT_SECRET"));
      resolve(response);
    } catch (err) {
      return reject(new AuthError(ERROR_MESSAGE.INVALID_JWT_TOKEN));
    }
  });
};
