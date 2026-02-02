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
  // TODO: Implement main app specific interception logic
  // TODO: Implement this class based on project requirements
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(tap(() => console.log(`After...`)));
  }
}
