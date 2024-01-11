import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpResponse, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { User } from './user';
import { UrlSegment } from '@angular/router';

// array in local storage for registered users
/*const usersKey = 'angular-14-registration-login-example-users';
let users: any[] = JSON.parse(localStorage.getItem(usersKey)!) || [];*/

@Injectable()
export class RestInterceptor implements HttpInterceptor
{
  constructor(private auth: AuthenticationService) {}

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any>
    {
        const { url, method, body } = request;

        if(url.endsWith('/v1/login') && method === 'POST')
        {
              const { username, password } = body;

              if(username === 'xlnet' && password === '$$$')
              {    
                const response$ = of(new HttpResponse(
                  { body: 
                    {
                        username: 'xlnet',
                        password: '*******',
                        token: 'U2FsdGVkX1+xovPDV0m0um6MPlrb+p5aG8Rb09TSWaM='
                    }, status: 200}));
                  return response$;
              }
        }
   
        return throwError(() => new Error('credenziali errate'));
    }
}
