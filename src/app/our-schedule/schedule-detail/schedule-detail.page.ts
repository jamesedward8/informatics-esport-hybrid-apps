import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EsportserviceService, Event } from 'src/app/esportservice.service';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage implements OnInit {

  title:string = "";
  event:any
  events:Event[] = []
  public alertButtons = ['OK']

  constructor(private route:ActivatedRoute, private esportservice: EsportserviceService) { }

  ngOnInit() {
    this.events = this.esportservice.events;
    this.route.params.subscribe(params => {
      this.title = params['title'];
      this.event = this.events.find(event => event.title === this.title);
    });
  }
}