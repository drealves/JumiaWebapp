import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Customer} from "./customer";
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getPerson(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiServerUrl}/customer`);
  }

  public addcustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiServerUrl}/customer`, customer);
  }
}
