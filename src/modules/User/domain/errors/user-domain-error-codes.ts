export const UserDomainErrorCodes = {
  INVALID_USERNAME: 'INVALID_USERNAME',
  INVALID_EMAIL: 'INVALID_EMAIL',
  INVALID_FULLNAME: 'INVALID_FULLNAME',
  INVALID_PASSWORD: 'INVALID_PASSWORD',
} as const;

export type UserDomainErrorCodes =
  (typeof UserDomainErrorCodes)[keyof typeof UserDomainErrorCodes];
