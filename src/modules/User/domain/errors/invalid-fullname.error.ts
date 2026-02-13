import UserDomainErrorMessages from './user-domain-error-messages';
import { UserDomainErrorCodes } from './user-domain-error-codes';
import { DomainError } from '@shared';

export class InvalidFullnameError extends DomainError<UserDomainErrorCodes> {
  code = UserDomainErrorCodes.INVALID_FULLNAME;

  constructor() {
    super(UserDomainErrorMessages[UserDomainErrorCodes.INVALID_FULLNAME]);
    this.name = 'InvalidFullnameError';
  }
}
