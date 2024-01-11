import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
{
    path: '',
    component: LoginComponent
  },
{
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    children: [
      {path: '', redirectTo: 'userInfo', pathMatch: 'full'}, 
      {path: 'userInfo', component: UserInfoComponent}, 
      {path: 'salary', component: PageComponent}, 
      {path: 'userData', component: PageComponent}, 
      {path: 'financialRelationships', component: PageComponent}, 
      {path: 'externalActivities', component: PageComponent}, 
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
