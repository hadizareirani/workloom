export abstract class InfraError<TCode> extends Error {
  abstract readonly code: TCode;

  protected constructor(message?: string) {
    super(message);
  }
}
