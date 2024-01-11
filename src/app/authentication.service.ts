import { Injectable } from '@angular/core';
import moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService
{
  constructor(private http: HttpClient){}

  async submitApplication(username: string, password: string) 
  {
    this.http.post<User>('http://localhost:4200/v1/login', {username, password})
          .subscribe(response => 
          {
            console.log(response);
            localStorage.setItem('token',response.token); 
            return response;
          },
          error => {throw(error);});
  }

  /*private setSession(authResult) {
      const expiresAt = moment().add(authResult.expiresIn,'second');

      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }*/
}




