import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  game:any
  name: string = "";
  bannerUrl: string = "";  
  teams: { name: string }[] = [];
  games = [
    {
      teams: ["Team A", "Team B", "Team C", "Team D"],
      bannerUrl: 'https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg',
      name: 'Valorant',
    },
    {
      teams: ["Team A", "Team B", "Team C", "Team D"],
      bannerUrl: 'https://gambar.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/07/1-68.jpg',
      name: 'PUBG',
    },
    {
      teams: ["Team A", "Team B", "Team C", "Team D"],nerUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg?t=1724428927',
      bannerUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg?t=1724428927',
      name: 'DOTA 2',
    },
    {
      teams: ["Team A", "Team B", "Team C", "Team D"],
      bannerUrl: 'https://praditadirgantara.sch.id/wp-content/uploads/2023/05/turnamen-mobile-legends-sma-pradita-dirgantara.jpeg.webp',
      name: 'Mobile Legends: Bang Bang',
    }
  ];

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.loadGame();
    });
  }

  loadGame() {
    this.game = this.games.find(game => game.name === this.name);
    if (this.game) {
      this.bannerUrl = this.game.bannerUrl;
      this.teams = this.game.teams;
    }
  }
}
