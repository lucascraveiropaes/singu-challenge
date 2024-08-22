export const HTTP_CODES = {
  SUCCESS: 200,

  BAD_REQUEST: { code: 400, message: "Bad Request" },
  UNAUTHORIZED: { code: 401, message: "Unauthorized" },
  FORBIDDEN: { code: 403, message: "Forbidden" },
  NOT_FOUND: { code: 404, message: "Not Found" },
  METHOD_NOT_ALLOWED: { code: 405, message: "Method Not Allowed" },
  CONFLICT: { code: 409, message: "Conflict" },
  INTERNAL_SERVER_ERROR: { code: 500, message: "Internal Server Error" },
  NOT_IMPLEMENTED: { code: 501, message: "Not Implemented" },
  BAD_GATEWAY: { code: 502, message: "Bad Gateway" },
  SERVICE_UNAVAILABLE: { code: 503, message: "Service Unavailable" },
  GATEWAY_TIMEOUT: { code: 504, message: "Gateway Timeout" },

  CUSTOM_ERROR: { code: 500, message: "Custom Error Here" },
};
