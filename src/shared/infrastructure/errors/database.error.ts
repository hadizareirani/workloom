import { InfraError, ErrorCode, ErrorMessages } from '@shared';

export class DatabaseError extends InfraError {
  readonly code = ErrorCode.INTERNAL_ERROR;

  constructor() {
    super(ErrorMessages[ErrorCode.INTERNAL_ERROR]);
    this.name = 'DatabaseError';
  }
}
