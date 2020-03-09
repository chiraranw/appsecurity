import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
const baseUrl = "http://localhost:8080";
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  //Logout
  logout(){
    localStorage.removeItem('access_token');
  }



  //Check if the user is authenicated.
  public isAuthenticated(): boolean {
    const access_token = localStorage.getItem('access_token');
    return !helper.isTokenExpired(access_token);
  }

  public login(username:string,password:string) {
    let params = new URLSearchParams();
    // params.append('username', 'linda');
    // params.append('password', '1111');
    const headers =
      new HttpHeaders({
        'Authorization': 'Basic ' + btoa("linda:1111")
      });
    return this.http.post(
      baseUrl + '/login',
      {
        "username": username,
        "password": password
      },
      { headers: headers, observe: 'response' }

    );
  }
}
