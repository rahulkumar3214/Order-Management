import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
//import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: any;
  // deleteCustomer(key: any) {
  //   throw new Error("Method not implemented.");
  // }

  // constructor(private firebase: AngularFireDatabase) { }
  // customerList: AngularFireList<any>;
  form = new FormGroup({
    //$key: new FormControl(null),
    orderNumber: new FormControl('', Validators.required),
    orderDueDate: new FormControl(),
    buyerName: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    totalOrder: new FormControl('')
  });
 customerArray = [
    {"orderNumber":"1", "orderDueDate":"1992-02-15", "buyerName":"rahul", "address":"gachibowli", "phone":"9642634019", "totalOrder":"555556" },
    {"orderNumber":"2", "orderDueDate":"1992-02-16", "buyerName":"Kumar", "address":"indira", "phone":"3223262626", "totalOrder":"5000" },
    {"orderNumber":"3", "orderDueDate":"1992-02-17", "buyerName":"Navratan", "address":"delhi", "phone":"3215666466", "totalOrder":"500" },
    {"orderNumber":"4", "orderDueDate":"1992-02-18", "buyerName":"Technologies", "address":"kolkata", "phone":"8876256555", "totalOrder":"2000" },
    {"orderNumber":"5", "orderDueDate":"1992-02-19", "buyerName":"E", "address":"hyderbad", "phone":"9654552233", "totalOrder":"5455200" }
  ];
  // getCustomers() {
  //   this.customerList = this.firebase.list('customers');
  //   return this.customerList.snapshotChanges();
  // }
  
  insertCustomer(customer) {
    var addData :any = customer.orderNumber;
    var indexCustomer = this.customerArray.findIndex(
      a => a.orderNumber=== addData);
      var obj=this.customerArray[indexCustomer];
      
     if(indexCustomer == -1) {
     this.customerArray.push({
      orderNumber: customer.orderNumber,
      orderDueDate: customer.orderDueDate,
      buyerName: customer.buyerName,
      address: customer.address,
      phone: customer.phone,
       totalOrder: customer.totalOrder
     });
          }     
     //this.form.reset();
      if(addData == obj.orderNumber){
        this.customerArray.splice(indexCustomer,1,this.form.value);
      }
      //this.form.reset();
    }
    
     populateForm(customer) {
      //this.form.setValue(customer);
       this.form.setValue(customer);
              //  var addData= this.customer.orderNumber;
      //      var indexCustomer = this.customerArray.findIndex(
      //      customer => customer.orderNumber==="this.customerArray.orderNumber");
      //      if(addData == this.customerArray[indexCustomer].orderNumber){
      //    this.customerArray=this.customerArray.splice(indexCustomer,1,this.form.value);
      //  }
      }

    // deleteCustomer($key: string) {
    //   this.customerList.remove($key);
    }
  



