import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RestInterceptor } from './rest-interceptor';
import { UserInfoComponent } from './user-info/user-info.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserInfoComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
     NgbModule,
    AppRoutingModule,
    FormsModule,
     HttpClientModule,
    ReactiveFormsModule
  ],
   providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
