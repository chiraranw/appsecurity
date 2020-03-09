import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  private _admins: string;
  public get admins(): string {
    return this._admins;
  }
  public set admins(value: string) {
    this._admins = value;
  }

  constructor(private api:ApiService) {
    this.api.admins().subscribe(
      (res)=>{
        this.admins=res.toString();
        console.log("Resp",res);
        
      },
      (err)=>{
        console.log("Error",err);
        
      }
    );
   }

  ngOnInit() {
  }

}
