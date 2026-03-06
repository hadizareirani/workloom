import * as bcrypt from 'bcrypt';
import { InvalidPasswordError } from '../errors/invalid-password.error';

export class Password {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  static async create(value: string): Promise<Password> {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;"'<>,.?/~`\\|]).{8,}$/;
    const saltOrRounds = 10;

    if (!value || value.trim().length < 5 || !strongPasswordRegex.test(value)) {
      throw new InvalidPasswordError();
    }

    const hashPassword = await bcrypt.hash(
      `${value}-${process.env.PASSWORD_HASH}`,
      saltOrRounds,
    );

    return new Password(hashPassword);
  }

  static fromPersistence(password: string): Password {
    return new Password(password);
  }

  async compareTo(other: Password): Promise<boolean> {
    const isValidPassword = await bcrypt.compare(this.value, other.value);
    return isValidPassword;
  }

  get value(): string {
    return this._value;
  }
}
