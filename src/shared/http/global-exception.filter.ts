import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

import { DomainError, ErrorCode, InfraError } from '../errors';
import { ApiResponse } from './api-response';
import { ErrorMessages } from '../errors/error-messages';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    if (exception instanceof DomainError) {
      const code = exception.code as string;
      return res.status(400).json(
        ApiResponse.fail({
          code,
          message: ErrorMessages[code] as string,
        }),
      );
    }

    if (exception instanceof InfraError) {
      const code = exception.code as string;
      return res.status(500).json(
        ApiResponse.fail({
          code,
          message: ErrorMessages[code] as string,
        }),
      );
    }

    if (exception instanceof HttpException) {
      throw exception;
    }

    return res.status(500).json(
      ApiResponse.fail({
        code: ErrorCode.INTERNAL_ERROR,
        message: ErrorMessages[ErrorCode.INTERNAL_ERROR],
      }),
    );
  }
}
