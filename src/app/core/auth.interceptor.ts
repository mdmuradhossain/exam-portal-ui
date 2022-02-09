import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  //   TOKEN_HEADER = 'Authorization';

  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getAuthToken();
    let authRequest = req;
    if (token != null) {
      authRequest = authRequest.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    return next.handle(authRequest);
  }
}

export const authInterceptorProvidors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
