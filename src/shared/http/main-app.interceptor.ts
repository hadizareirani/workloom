/*
https://docs.nestjs.com/interceptors#interceptors
*/

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class MainAppInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // const req = context.switchToHttp().getRequest();
    // const res = context.switchToHttp().getResponse();

    return next.handle().pipe(tap(() => console.log(`After...`)));
  }
}
