import { Component, OnInit } from '@angular/core';
import { EsportserviceService, Event } from '../esportservice.service';

@Component({
  selector: 'app-our-schedule',
  templateUrl: './our-schedule.page.html',
  styleUrls: ['./our-schedule.page.scss'],
})
export class OurSchedulePage implements OnInit {

  events:Event[] = [];

  constructor(private esportservice:EsportserviceService) { }

  ngOnInit() {
    this.events = this.esportservice.events;
  }
}