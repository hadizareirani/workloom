import { UserDomainErrorCodes } from './user-domain-error-codes';

const UserDomainErrorMessages: Record<UserDomainErrorCodes, string> = {
  [UserDomainErrorCodes.INVALID_USERNAME]: 'Invalid username',
  [UserDomainErrorCodes.INVALID_EMAIL]: 'Invalid email format',
};

export default UserDomainErrorMessages;
