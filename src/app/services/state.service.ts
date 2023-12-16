import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private apiKey = 'aEF2OU12cThIUDk1SlJIUzZTQ3E3SnphTWVJVTNaejdsZVlFV1MydA==';

  constructor(private http: HttpClient) {}

  getStates(countryCode:any): Observable<any> {
    const apiUrl = `https://api.countrystatecity.in/v1/countries/${countryCode}/states`;
    var key={
      headers : new HttpHeaders({
       'X-CSCAPI-KEY': this.apiKey,
     })
   }

    return this.http.get(apiUrl, key);
  }
}
