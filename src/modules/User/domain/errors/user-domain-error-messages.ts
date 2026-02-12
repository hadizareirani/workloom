import { UserDomainErrorCodes } from './user-domain-error-codes';

const UserDomainErrorMessages: Record<UserDomainErrorCodes, string> = {
  [UserDomainErrorCodes.INVALID_USERNAME]: 'Invalid username',
};

export default UserDomainErrorMessages;
