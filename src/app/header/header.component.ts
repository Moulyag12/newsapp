import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private _services:NewsapiserviceService){}
    
    topheadingDisplay:any[]=[];
  ngOnInit(): void {
    this._services.Header().subscribe((result)=>{
            console.log(result);
            this.topheadingDisplay=result.articles;
    })
  }
} 


