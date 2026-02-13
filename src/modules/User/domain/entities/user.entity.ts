import { GUID } from '@shared';
import { Username, Email } from '../value-object';

export class User {
  // TODO: Add validation and business logic as needed
  // TODO: Consider using value objects for email, username, etc. to encapsulate validation logic
  private _id: number;
  private _userId: GUID;
  private _username: Username;
  private _email: Email;
  private _fullName: string;
  private _password: string;
  private _isDeleted: boolean;
  private _deletedAt: Date | null;
  private _createdAt: Date;
  private _updatedAt: Date;

  private constructor(
    id: number,
    userId: GUID,
    username: Username,
    email: Email,
    fullName: string,
    password: string,
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
    fullName: string;
    password: string;
    isDeleted: boolean;
    deletedAt: Date | null;
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
}
