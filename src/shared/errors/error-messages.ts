import { ErrorCode } from './error-codes';

export const ErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.WEAK_PASSWORD]: 'Password is too weak',
  [ErrorCode.USER_ALREADY_EXISTS]: 'User already exists',
  [ErrorCode.INTERNAL_ERROR]: 'Internal server error',
};
