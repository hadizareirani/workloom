import UserDomainErrorMessages from './user-domain-error-messages';
import { UserDomainErrorCodes } from './user-domain-error-codes';
import { DomainError } from '@shared';

export class InvalidUsernameError extends DomainError<UserDomainErrorCodes> {
  code = UserDomainErrorCodes.INVALID_USERNAME;

  constructor() {
    super(UserDomainErrorMessages[UserDomainErrorCodes.INVALID_USERNAME]);
    this.name = 'InvalidUsernameError';
  }
}
