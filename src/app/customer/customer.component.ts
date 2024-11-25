import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  providers: [CustomerService]
})

export class CustomerComponent{
public customers: any;
public cutomerInfo: any;

  constructor(private customer: CustomerService)  {}
  
  ngOnInit(): void {
    this.fetchCustomerList();
  }
  
  fetchCustomerList(): void {
    this.customer.GetCustomerList().subscribe(res => {
      this.customers = res;
      console.log('res', res);
    })
  }

  fetchCustomerInfo(id: any): void {
    this.customer.GetCustomerById(id).subscribe(res => {
      this.cutomerInfo = res;
      console.log('Customer Info:', this.cutomerInfo);
    });
  }
}
