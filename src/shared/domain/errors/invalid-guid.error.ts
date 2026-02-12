import { ErrorCode, ErrorMessages, DomainError } from '@shared';

export class InvalidGcUIDError extends DomainError {
  code: ErrorCode = ErrorCode.INVALID_GUID_FORMAT;

  constructor() {
    super(ErrorMessages[ErrorCode.INVALID_GUID_FORMAT]);
    this.name = 'InvalidGUIDError';
  }
}
