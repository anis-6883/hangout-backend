import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    const start = Date.now();

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - start;

        this.logger.log(
          `${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms | IP: ${req.ip} | ${req.headers['user-agent']}`,
        );
      }),
      catchError((error) => {
        const duration = Date.now() - start;

        this.logger.error(
          `${req.method} ${req.originalUrl} ${error.getStatus?.() ?? 500} ${duration}ms`,
          error.stack,
        );

        throw error; // Re-throw so the ExceptionFilter can handle it
      }),
    );
  }
}
