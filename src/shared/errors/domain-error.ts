import { ErrorCode } from './error-codes';

export abstract class DomainError extends Error {
  abstract readonly code: ErrorCode;

  protected constructor(message?: string) {
    super(message);
  }
}
