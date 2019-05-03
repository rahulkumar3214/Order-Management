import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'customer', component: CustomerComponent },
  { path: 'customer-list', component: CustomerListComponent},
  { path: '**', redirectTo:'' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
