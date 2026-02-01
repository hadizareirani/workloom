import { ErrorCode } from './error-codes';

export abstract class DomainError extends Error {
  code: ErrorCode;

  constructor(messages?: string) {
    super(messages);
  }
}
