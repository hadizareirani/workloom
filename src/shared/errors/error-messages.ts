import { ErrorCode } from './error-codes';

export const ErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.INVALID_GUID_FORMAT]: 'Invalid GUID format',
  [ErrorCode.INTERNAL_ERROR]: 'Internal server error',
};
