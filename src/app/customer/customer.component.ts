import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../orderservice/customer.service';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  submitted : boolean;
  showSuccessmessage: boolean;
  constructor(private customerService : CustomerService) { }
  formControls = this.customerService.form.controls;

  ngOnInit() {
    
  }
onSubmit(){
  this.submitted= true;
  //crud operation
  if(this.customerService.form.valid){
    // if(this.customerService.form.value! == null)
      this.customerService.insertCustomer(this.customerService.form.value);
      
    //    else
    //  this.customerService.updateCustomer(this.customerService.form.value);
     this.showSuccessmessage=true;
     setTimeout(() => this.showSuccessmessage = false, 3000);
  this.submitted= false;
  this.customerService.form.reset();
    }
}
}
