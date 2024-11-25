import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
private url = 'https://localhost:7297/api/Customer';
  constructor(private http: HttpClient) { }

  GetCustomerList(){
      return this.http.post(`${this.url}/All`, '')
      //return this.http.get(this.url);
    }

    GetCustomerById(id: any){
      return this.http.get(`${this.url}/ById/${id}`)
    }
}
