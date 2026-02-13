import UserDomainErrorMessages from './user-domain-error-messages';
import { UserDomainErrorCodes } from './user-domain-error-codes';
import { DomainError } from '@shared';

export class InvalidEmailError extends DomainError<UserDomainErrorCodes> {
  code = UserDomainErrorCodes.INVALID_EMAIL;

  constructor() {
    super(UserDomainErrorMessages[UserDomainErrorCodes.INVALID_EMAIL]);
    this.name = 'InvalidEmailError';
  }
}
