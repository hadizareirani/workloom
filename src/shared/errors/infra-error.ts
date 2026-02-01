import { ErrorCode } from './error-codes';

export abstract class InfraError extends Error {
  abstract readonly code: ErrorCode;

  protected constructor(message?: string) {
    super(message);
  }
}
