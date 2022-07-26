import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request);

    const headersConfig:any = {}
    const token = localStorage.getItem("token")
   

    if (token) {

      headersConfig['Authorization'] = `IsKool ${token}`
     
    }
    const _req = request.clone({ setHeaders: headersConfig });
    return next.handle(_req);
  }
}
