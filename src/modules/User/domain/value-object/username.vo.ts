import { InvalidUsernameError } from '../errors';

export class Username {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  static create(value: string): Username {
    if (!value || value.trim().length < 5) {
      throw new InvalidUsernameError();
    }
    return new Username(value);
  }

  static fromPersistence(username: string): Username {
    return new Username(username);
  }

  get value(): string {
    return this._value;
  }

  compareTo(other: Username): boolean {
    return this._value === other.value;
  }
}
