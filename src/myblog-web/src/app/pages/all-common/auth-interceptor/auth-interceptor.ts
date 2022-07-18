import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../authservice/auth-service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    const authToken = this.auth.getAuthorizationToken();

    let request = req;
    
    if (authToken) {
      request = req.clone({
        headers: req.headers.set('Authorization', authToken)
      });
    }

    return next.handle(request);
  }
}