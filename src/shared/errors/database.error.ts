import { InfraError } from './infra-error';
import { ErrorCode } from './error-codes';

export class DatabaseError extends InfraError {
  readonly code = ErrorCode.INTERNAL_ERROR;
}
