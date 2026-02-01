export interface IApiResponseErrorDto {
  code: string;
  message: string;
}

export class ApiResponse<TValue> {
  private result?: TValue;
  private error?: IApiResponseErrorDto;
  private isSuccess: boolean;

  constructor(value?: TValue, error?: IApiResponseErrorDto) {
    this.result = value;
    this.error = error;
    this.isSuccess = !error;
  }

  static success<TValue>(value: TValue): ApiResponse<TValue> {
    return new ApiResponse<TValue>(value);
  }

  static fail(error: IApiResponseErrorDto): ApiResponse<never> {
    return new ApiResponse<never>(undefined, error);
  }

  public getValue(): TValue {
    if (!this.isSuccess) {
      throw new Error('Cannot get value from failed result');
    }
    return this.result!;
  }

  public getError(): IApiResponseErrorDto {
    if (this.isSuccess) {
      throw new Error('Cannot get error from successful result');
    }
    return this.error!;
  }

  isSucceeded(): boolean {
    return this.isSuccess;
  }
}
