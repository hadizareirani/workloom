import { v4 as uuid4, validate as uuidValidate } from 'uuid';

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
      // Todo: Consider throwing a custom error type for better error handling
      throw new Error('Invalid GUID format');
    }
    return new GUID(value);
  }
}
