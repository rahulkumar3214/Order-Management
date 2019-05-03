import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../orderservice/authentication.service';
//import { AlertService } from '../orderservice/alert.service';
import { CustomerService } from '../orderservice/customer.service';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    newPage: boolean;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    authenticationService: any;
    alertService: any;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private _cookieService:CookieService
        //private authenticationService: AuthenticationService,
      // private alertService: AlertService) 
     ) {
      if(_cookieService.get('remember')) {
        this.Formdata.username=this._cookieService.get('username');
        this.Formdata.password=this._cookieService.get('password');
        this.Formdata.rememberme=this._cookieService.get('remember');
     }
     }

        ngOnInit() {
          this.loginForm = this.formBuilder.group({
              username: ['', Validators.required],
              password: ['', Validators.required]
          });
        
          // reset login status
        //this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/customer';
      }

    get f() { return this.loginForm.controls; }
    onSubmit() {
      this.submitted = true;

      if (this.loginForm.invalid) {
          return;
       }
      //this.loading = true;
      this.router.navigate([this.returnUrl]);
      // this.authenticationService.login(this.f.username.value, this.f.password.value)
      //     .pipe(first())
      //     .subscribe(
      //         data => {
      //             this.router.navigate([this.returnUrl]);
      //         },
      //         error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         });
  }
  public Formdata:any = {};  
        submitData() {
       this._cookieService.put('username',this.Formdata.username);
       this._cookieService.put('password',this.Formdata.password);
       this._cookieService.put('remember',this.Formdata.rememberme);
    }

}
