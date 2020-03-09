import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  frm: FormGroup;

  constructor(

    private api: ApiService,
    private cs: CookieService,
    private route: Router,
    private auth: AuthService,
    private fb: FormBuilder

  ) {

    this.frm = this.fb.group({
      username: [],
      password: []
    });
  }

  private login() {
    this.auth.login(this.frm.get('username').value, this.frm.get('password').value).subscribe(
      res => {
        this.route.navigate(['/home']);
        this.saveToken(res.headers.get('Authorization').substr(6));
      },
      error => {
        //Handles errors here...
      }
    );
  }

  private saveToken(token: string) {
    localStorage.setItem("access_token", token);
  }

  ngOnInit() {
  }

}
