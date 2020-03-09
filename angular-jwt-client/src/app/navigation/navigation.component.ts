import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
