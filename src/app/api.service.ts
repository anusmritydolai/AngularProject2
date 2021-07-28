import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getCountryWithCode() {
    return this.httpClient.get(environment.countryCodeWithIndex);
  }

  public getNews() {
    return this.httpClient.get(environment.newsApi);
  }


}
