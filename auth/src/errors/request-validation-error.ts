import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  statusCode = 500;
  constructor(public errors: ValidationError[]) {
    super();
    // Only because we are extending a build-in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => {
      return {
        message: error.msg,
        field: error.param,
      };
    });
  }
}
