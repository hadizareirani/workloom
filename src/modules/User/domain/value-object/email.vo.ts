import { InvalidEmailError } from '../errors';

export class Email {
  private readonly _value: string;
  private static readonly emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  private constructor(value: string) {
    this._value = value;
  }

  static create(value: string): Email {
    const isValid = this.emailRegex.test(value);
    if (!isValid) {
      throw new InvalidEmailError();
    }
    return new Email(value);
  }

  static fromPersistence(email: string): Email {
    return new Email(email);
  }

  compareTo(other: Email): boolean {
    return this._value === other.value;
  }

  get value(): string {
    return this._value;
  }
}
