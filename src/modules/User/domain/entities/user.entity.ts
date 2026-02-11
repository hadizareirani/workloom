export class User {
  private _id: string;
  private _userId: string;
  private _username: string;
  private _email: string;
  private _fullName: string;
  private _password: string;
  private _isDeleted: boolean;
  private _deletedAt: Date | null;
  private _createdAt: Date;
  private _updatedAt: Date;

  private constructor(
    id: string,
    userId: string,
    username: string,
    email: string,
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

  static create() {
    return new User();
  }
}
