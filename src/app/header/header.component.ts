import { Component, OnInit } from '@angular/core';
import { AppService } from '../AppServices/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  contactInfo:boolean;

  constructor(public AppServices:AppService)
  {
    this.contactInfo = AppServices.contactInfo;
    console.log(this.contactInfo);
    
  }

  ngOnInit(): void {
  }

  contactMe()
  {
    this.contactInfo=true;
    
  }

}
