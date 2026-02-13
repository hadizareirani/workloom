import { InvalidFullnameError } from '../errors';

export class FullName {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  static create(value: string): FullName {
    if (!value || value.trim().length < 3 || value.trim().length > 64) {
      throw new InvalidFullnameError();
    }
    return new FullName(value);
  }

  static fromPersistence(fullName: string): FullName {
    return new FullName(fullName);
  }

  get value(): string {
    return this._value;
  }

  compareTo(other: FullName): boolean {
    return this._value === other.value;
  }
}
