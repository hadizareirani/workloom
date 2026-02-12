export const UserDomainErrorCodes = {
  INVALID_USERNAME: 'INVALID_USERNAME',
} as const;

export type UserDomainErrorCodes =
  (typeof UserDomainErrorCodes)[keyof typeof UserDomainErrorCodes];
