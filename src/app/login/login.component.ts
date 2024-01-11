import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-login',
  templateUrl: `./login.component.html`,
  styleUrl: './login.component.css'
})

export class LoginComponent
{
  loginForm = this.formBuilder.group
  ({
    username: '',
    password: ''
  });


  submitApplication()
  {

    this.authenticationService.submitApplication(
      this.loginForm.value.username ?? '',
      this.loginForm.value.password ?? ''
    ).then((response) => {
      this.router.navigate(['/dashboard']);
   }).catch(err => err);


/*.    then((response) => {
       this.router.navigate(['/dashboard']);
    }).catch(error => {console.log(error + 'login comp');this.loginForm.errors;})
    .finally( () => console.log("Authentication done.") );*/

  }

  
  constructor
  (private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router)
  {}
}
