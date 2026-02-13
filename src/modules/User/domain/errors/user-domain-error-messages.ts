import { UserDomainErrorCodes } from './user-domain-error-codes';

const UserDomainErrorMessages: Record<UserDomainErrorCodes, string> = {
  [UserDomainErrorCodes.INVALID_USERNAME]: 'Invalid username',
  [UserDomainErrorCodes.INVALID_EMAIL]: 'Invalid email format',
  [UserDomainErrorCodes.INVALID_FULLNAME]:
    'Full name must be between 3 and 64 characters long',
};

export default UserDomainErrorMessages;
