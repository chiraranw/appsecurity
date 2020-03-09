import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  public admins:string;
  constructor(private api:ApiService) { 
    this.api.managers().subscribe(
      (res)=>{
        console.log("Managers",res);        
        this.admins=res.toString();
      },
      (err)=>{}
    );
  }

  ngOnInit() {
  }

}
