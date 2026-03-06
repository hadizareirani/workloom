import UserDomainErrorMessages from './user-domain-error-messages';
import { UserDomainErrorCodes } from './user-domain-error-codes';
import { DomainError } from '@shared';

export class InvalidPasswordError extends DomainError<UserDomainErrorCodes> {
  code = UserDomainErrorCodes.INVALID_PASSWORD;

  constructor() {
    super(UserDomainErrorMessages[UserDomainErrorCodes.INVALID_PASSWORD]);
    this.name = 'InvalidPasswordError';
  }
}
