import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../orderservice/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  [x: string]: any;

  constructor(private customerService : CustomerService) { }
  showDeletedMessage: boolean;
  searchText: string = "";
  customerArray = this.customerService.customerArray;

  ngOnInit() {
    this.customerArray = this.customerService.customerArray;

    //this.customerService.getCustomers();
    // //this.customerService.getCustomers().subscribe(
    //   list => {
    //     this.customerArray = list.map(item => {
    //       return {
    //         $key: item.key,
    //         ...item.payload.val()
    //       };
    //     });
    //   });
  }
   
  onDelete(customer) {
    if (confirm('Are you sure to delete this record ?')) {
      // this.customerService.deleteCustomer($key);
    //   this.customerService.customerArray=this.customerArray.filter(function( obj ) {
    //     return obj.orderNumber !== 'customerService.customerArray.orderNumber';
    // });
    var addData :any = customer.orderNumber;
    var indexCustomer = this.customerArray.findIndex(
      a => a.orderNumber=== addData);
      if(addData == this.customerArray[indexCustomer].orderNumber)
        this.customerArray.splice(indexCustomer,1);
      
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
    //this.customerService.form.reset();
  }
  filterCondition(customer) {
    return customer.buyerName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}

