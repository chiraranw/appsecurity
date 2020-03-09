import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: string = "Test";
  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.api.users().subscribe(
      (data) => {
        console.log("Data"+data);
        
       },
      (err) => { 
        console.log("Error"+err);
        
      }
    );
  }

}
