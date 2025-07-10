
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { I18nService } from './i18n.service';

@Injectable()
export class I18nInterceptor implements NestInterceptor {
  constructor(private readonly i18nService: I18nService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const lang = request.headers['accept-language']?.split(',')[0];
    if (lang) {
      this.i18nService.setAppLanguage(lang);
    }
    return next.handle();
  }
}
