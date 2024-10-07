import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage implements OnInit {

  title:string = "";
  event:any
  
  public alertButtons = ['OK']
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.title = params['title'];
      this.event = this.events.find(event => event.title === this.title);
    });
  }

  events = [
    {
      date: '2024-10-01',
      time: '15:00',
      title: 'VCT Pacific',
      description: 'Join us for an exciting match in the VCT Pacific tournament, where the top teams from around the region will battle it out in a high-stakes, action-packed showdown. Expect intense gameplay, strategic plays, and non-stop action as Team A faces their toughest challenge yet. Whether you are a casual viewer or a dedicated fan of Valorant, this is a must-watch event that promises to deliver thrilling moments and unforgettable highlights. Be sure to arrive early to secure a good seat and soak in the electric atmosphere at Gelora Bung Karno, Surabaya!',
      game: 'Valorant',
      team: 'Team A',
      place: 'Gelora Bung Karno, Surabaya',
      banner: 'https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg'
    },  
    {
      date: '2024-10-05',
      time: '18:00',
      title: 'MPL ID S14',
      description: 'Experience the intensity of Mobile Legends: Bang Bang like never before in the MPL ID S14 live stream. Team B will showcase their skills and strategies in a highly anticipated match, streaming live on our YouTube channel. Fans around the world are invited to tune in and watch this exciting clash of titans as the best players go head-to-head in this season’s top event. Don’t miss out on the chance to see your favorite teams and players in action, and be part of the exhilarating journey as the competition unfolds!',
      game: 'Mobile Legends: Bang Bang',
      team: 'Team B',
      place: 'Jatim Expo, Surabaya',
      banner: 'https://praditadirgantara.sch.id/wp-content/uploads/2023/05/turnamen-mobile-legends-sma-pradita-dirgantara.jpeg.webp'
    },
    {
      date: '2024-10-10',
      time: '10:00',
      title: 'PMSL SEA Fall',
      description: 'PMSL SEA Fall is bringing together some of the finest teams from the Southeast Asia region for a workshop and live match event. This interactive session is designed to give fans an inside look into how professional PUBG teams develop strategies and perfect their gameplay. Team C will be leading the session, providing insights into their training regimen, coordination, and tactical decision-making. Join us at Universitas Surabaya for a unique opportunity to learn from the pros and engage with the players in person!',
      game: 'PUBG',
      team: 'Team C',
      place: 'Universitas Surabaya',
      banner: 'https://gambar.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/07/1-68.jpg'
    }
  ];
  


}
