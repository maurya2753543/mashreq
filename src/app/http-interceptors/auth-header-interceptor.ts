import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()

export class AuthHeaderInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler  ) {
    console.log('Auth InterceptProvider');
    console.log(request.url);
    const authToken = 'neeraj';
    const authReq = request.clone({
      setHeaders: { Authorization: authToken}
    });
    return next.handle(authReq);
  }

}
