import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

const baseUrl = "http://localhost:8080/api/v1/manage";
const headers =
new HttpHeaders({
  'Authorization': 'Bearer ' + localStorage.getItem('access_token').trim()
});

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public users() {
   // console.log("Token",localStorage.getItem('access_token').trim());    
    return this.http
      .get(baseUrl + '/users',{ headers: headers });
  }

  public managers() {
    return this.http
      .get(
        baseUrl + '/managers',
        { headers: headers }
      );
  }


  public admins() {   
    return this.http
      .get(
        baseUrl + '/admins',
        { headers: headers }
      );
  }

}
