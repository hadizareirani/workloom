import { ErrorCode, ErrorMessages, DomainError } from '@shared';

export class InvalidGuidError extends DomainError<ErrorCode> {
  code: ErrorCode = ErrorCode.INVALID_GUID_FORMAT;

  constructor() {
    super(ErrorMessages[ErrorCode.INVALID_GUID_FORMAT]);
    this.name = 'InvalidGUIDError';
  }
}
