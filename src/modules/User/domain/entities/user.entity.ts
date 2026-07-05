import { GUID } from '@shared';
import { Username, Email, FullName } from '../value-object';
import { Password } from '../value-object/password.vo';

export class User {
  // TODO: Add validation and business logic as needed
  // TODO: Consider using value objects for email, username, etc. to encapsulate validation logic
  private _id: number;
  private _userId: GUID;
  private _username: Username;
  private _email: Email;
  private _fullName: FullName;
  private _password: Password;
  private _isDeleted: boolean;
  private _deletedAt: Date | null;
  private _createdAt: Date;
  private _updatedAt: Date;

  private constructor(
    id: number,
    userId: GUID,
    username: Username,
    email: Email,
    fullName: FullName,
    password: Password,
    isDeleted: boolean,
    deletedAt: Date | null,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this._id = id;
    this._userId = userId;
    this._username = username;
    this._email = email;
    this._fullName = fullName;
    this._password = password;
    this._isDeleted = isDeleted;
    this._deletedAt = deletedAt;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  static create(props: {
    id: number;
    userId: GUID;
    username: Username;
    email: Email;
    fullName: FullName;
    password: Password;
    isDeleted?: boolean;
    deletedAt?: Date | null;
  }) {
    return new User(
      props.id,
      props.userId,
      props.username,
      props.email,
      props.fullName,
      props.password,
      props.isDeleted ?? false,
      props.deletedAt ?? null,
      new Date(),
      new Date(),
    );
  }
  get userId(): GUID {
    return this._userId;
  }

  get userName(): Username{
    return this._username;
  }

  get email(): Email {
    return this._email;
  }

  get fullname(): FullName {
    return this._fullName;
  }

  get password(): Password {
    return this._password;
  }

  get isDeleted(): boolean {
    return this._isDeleted;
  }

  get deletedAt(): Date| null {
    return this._deletedAt;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  private touch(): void {
    this._updatedAt = new Date();
  }

  
}
