import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-schedule',
  templateUrl: './our-schedule.page.html',
  styleUrls: ['./our-schedule.page.scss'],
})
export class OurSchedulePage implements OnInit {

  events = [
    {
      date: '2024-10-01',
      time: '15:00',
      title: 'Match against Team X',
      description: 'Exciting match scheduled for the afternoon.',
      game: 'Game 1',
      team: 'Team A'
    },
    {
      date: '2024-10-05',
      time: '18:00',
      title: 'Live Stream Event',
      description: 'Join us for a live stream on our YouTube channel.',
      game: 'Game 2',
      team: 'Team B'
    },
    {
      date: '2024-10-10',
      time: '10:00',
      title: 'Workshop on Strategy',
      description: 'Workshop focusing on team strategy and gameplay.',
      game: 'Game 3',
      team: 'Team C'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
