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
      title: 'VCT Pacific',
      description: 'Exciting match scheduled for the afternoon.',
      game: 'Valorant',
      team: 'Team A',
      place: 'Gelora Bung Karno, Surabaya',
      banner: 'https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg'
    },  
    {
      date: '2024-10-05',
      time: '18:00',
      title: 'MPL ID S14',
      description: 'Join us for a live stream on our YouTube channel.',
      game: 'Mobile Legends: Bang Bang',
      team: 'Team B',
      place: 'Jatim Expo, Surabaya',
      banner: 'https://praditadirgantara.sch.id/wp-content/uploads/2023/05/turnamen-mobile-legends-sma-pradita-dirgantara.jpeg.webp'
    },
    {
      date: '2024-10-10',
      time: '10:00',
      title: 'PMSL SEA Fall',
      description: 'Workshop focusing on team strategy and gameplay.',
      game: 'PUBG',
      team: 'Team C',
      place: 'Universitas Surabaya',
      banner: 'https://gambar.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/07/1-68.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
