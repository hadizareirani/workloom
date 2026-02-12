export abstract class DomainError<TCode> extends Error {
  abstract readonly code: TCode;

  protected constructor(message?: string) {
    super(message);
  }
}
