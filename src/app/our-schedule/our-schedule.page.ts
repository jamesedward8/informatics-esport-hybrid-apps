import { Component, OnInit } from '@angular/core';
import { EsportserviceService, Event } from '../esportservice.service';

@Component({
  selector: 'app-our-schedule',
  templateUrl: './our-schedule.page.html',
  styleUrls: ['./our-schedule.page.scss'],
})
export class OurSchedulePage implements OnInit {

  events:any[] = [];

  constructor(private esportservice:EsportserviceService) { }

  ngOnInit() {
    this.esportservice.scheduleList().subscribe(
      (data)=>{
        this.events = data;
        console.log(data);
      }
    )
  }
}