export class ApiError extends Error {
  public readonly status: number;
  public errors: unknown[];

  public constructor(status: number, message: string, errors: unknown[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  public static getBadRequestError = (
    message: string,
    errors: unknown[] = [],
  ): ApiError => {
    return new ApiError(400, message, errors);
  };

  public static getUnauthorizedError = (error?: unknown[]): ApiError => {
    return new ApiError(401, 'You need to sign up in the app', error);
  };

  public static getForbiddenError = (error?: unknown[]): ApiError => {
    return new ApiError(403, 'You are denied access', error);
  };
}
