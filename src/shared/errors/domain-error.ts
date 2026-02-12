export abstract class DomainError<TCode extends string> extends Error {
  abstract readonly code: TCode;

  protected constructor(message?: string) {
    super(message);
  }
}
