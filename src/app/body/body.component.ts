import { Component, OnInit } from '@angular/core';
import { AppService } from '../AppServices/app.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  contactInfo:boolean;

  constructor(public AppServices:AppService)
  {
    this.contactInfo = AppServices.contactInfo;
  }

  ngOnInit(): void {
  }

  contactMe()
  {
    this.AppServices.contactMe();
    this.contactInfo = this.AppServices.contactInfo;
  }
}
