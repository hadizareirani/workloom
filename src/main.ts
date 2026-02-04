import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
// import { doubleCsrf } from 'csrf-csrf';

import { AppModule } from './app.module';
import { GlobalExceptionFilter, MainAppInterceptor } from './shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new MainAppInterceptor());
  app.use(helmet());

  // TODO: Enable CORS if needed
  // app.enableCors();

  // TODO: Enable CSRF protection if needed
  // const {
  //   invalidCsrfTokenError,
  //   generateToken,
  //   validateRequest,
  //   doubleCsrfProtection,
  // } = doubleCsrf(doubleCsrfOptions);
  // app.use(doubleCsrfProtection);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
