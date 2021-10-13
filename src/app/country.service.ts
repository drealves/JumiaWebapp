import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";
import {Country} from "./country";


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }
  public getCountrys(): Observable<Country[]> {
    return this.http.get<[]>(`${this.apiServerUrl}/countries`);
  }

}
