import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { links } from '../constants/links.constants';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    
    var key={
       headers : new HttpHeaders({
        'X-CSCAPI-KEY': links.apiKey,
      })
    }
  
    return this.http.get(links.apiUrl, key);
  }

  getStates(countryCode:any): Observable<any> {
    const apiUrl = `${links.apiUrl}/${countryCode}/states`;
    var key={
      headers : new HttpHeaders({
       'X-CSCAPI-KEY': links.apiKey,
     })
   }

    return this.http.get(apiUrl, key);
  }

  getCities(countryCode:any,stateCode:any): Observable<any> {
    const apiUrl = `${links.apiUrl}/${countryCode}/states/${stateCode}/cities`;

    var key={
      headers : new HttpHeaders({
       'X-CSCAPI-KEY': links.apiKey,
     })
   }

    return this.http.get(apiUrl, key);
  }
}
