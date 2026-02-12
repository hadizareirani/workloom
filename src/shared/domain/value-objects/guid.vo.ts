import { v4 as uuid4, validate as uuidValidate } from 'uuid';
import { InvalidGuidError } from '../errors';

export class GUID {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  static create(): GUID {
    return new GUID(uuid4());
  }

  get value(): string {
    return this._value;
  }

  equals(other: GUID): boolean {
    return this.value === other.value;
  }

  static fromString(value: string): GUID {
    if (!uuidValidate(value)) {
      throw new InvalidGuidError();
    }
    return new GUID(value);
  }
}
