export const normalizePort = (
  val: number | string
): number | string | boolean => {
  const normolizedPort = typeof val === "string" ? parseInt(val, 10) : val;
  if (isNaN(normolizedPort)) {
    return val;
  }

  if (normolizedPort >= 0) {
    return normolizedPort;
  }

  return false;
};

export class AuthError extends Error {}

export enum STATUS_CODES {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  GONE = 410,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
}

export enum RESPONSE_MESSAGE {
  OK = "Ok",
  CREATED = "Created",
  NO_CONTENT = "No content",
  NOT_MODIFIED = "Not modified",
  BAD_REQUEST = "Bad request",
  UNAUTHORIZED = "Unauthorized",
  FORBIDDEN = "Forbidden",
  NOT_FOUND = "Not found",
  GONE = "Gone",
  INTERNAL_SERVER_ERROR = "Internal server error",
  SERVICE_UNAVAILABLE = "Service unavailable",
}

export enum ERROR_MESSAGE {
  INVALID_JWT_TOKEN = "Invalid jwt token",
}
