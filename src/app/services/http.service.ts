import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.apiUrl;
  token = environment.token;
  themeId = environment.themeId;

  constructor(
    public http: HttpClient
  ) {
  }

  get(endpoint, options?: Object) {
    return this.http.get(`${this.baseUrl}${endpoint}?theme_id=${this.themeId}`, options)
  }

  post(endpoint, data, options?: Object) : Observable<HttpResponse<any>>{
    return this.http.post<HttpResponse<any>>(`${this.baseUrl}${endpoint}`, data, options);
  }

  getWithAuth(endpoint) {
    return this.http.get(`${this.baseUrl}${endpoint}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${this.token}`
      })
    })
  }

  postWithAuth(endpoint, data) {
    return this.http.post(`${this.baseUrl}${endpoint}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${this.token}`
      })
    })
  }

}
