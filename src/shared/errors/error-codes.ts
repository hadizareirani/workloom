export const ErrorCode = {
  INVALID_GUID_FORMAT: 'INVALID_GUID_FORMAT',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const;

export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];
