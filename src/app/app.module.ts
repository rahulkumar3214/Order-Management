import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from './orderservice/customer.service';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
//import { MbscModule } from '@mobiscroll/angular';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    //MbscModule,
    ReactiveFormsModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CustomerService,
    CookieService 
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
