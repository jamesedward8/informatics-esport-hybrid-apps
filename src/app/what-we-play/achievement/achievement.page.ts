import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  gameName: string = "";
  selectedYear: string = "All";
  achievements: any[] = [];     
  filteredAchievements: any[] = [];
  years: string[] = ['All', '2021', '2022', '2023'];
  bannerUrl: string = "";

  games = [
    {
      name: 'Valorant',
      achievements: [
        { team: 'Team Alpha', year: 2023, name: 'Champion' },
        { team: 'Team Bravo', year: 2022, name: 'Top Scorer' }
      ],
      bannerUrl: 'https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg'
    },
    {
      name: 'PUBG',
      achievements: [
        { team: 'Team Champions', year: 2023, name: 'Winner' },
        { team: 'Team Alpha', year: 2021, name: 'MVP' }
      ],
      bannerUrl: 'https://gambar.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/07/1-68.jpg'
    },
    {
      name: 'DOTA 2',
      achievements: [
        { team: 'Team Bravo', year: 2021, name: 'Top Scorer' },
        { team: 'Team Delta', year: 2022, name: 'Semi-Finalist' }
      ],
      bannerUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg?t=1724428927'
    },
    {
      name: 'Mobile Legends: Bang Bang',
      achievements: [
        { team: 'Team Legends', year: 2023, name: 'Champion' },
        { team: 'Team Warriors', year: 2021, name: 'Finalist' }
      ],
      bannerUrl: 'https://praditadirgantara.sch.id/wp-content/uploads/2023/05/turnamen-mobile-legends-sma-pradita-dirgantara.jpeg.webp'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameName = params['name'];
      this.loadAchievements();
    });
  }

  loadAchievements() {
    const selectedGame = this.games.find(game => game.name === this.gameName);
    if (selectedGame) {
      this.achievements = selectedGame.achievements;
      this.filteredAchievements = this.achievements; 
      this.bannerUrl = selectedGame.bannerUrl;
    }
  }

  filterAchievements() {
    if (this.selectedYear === "All") {
      this.filteredAchievements = this.achievements; 
    } 
    else {
      this.filteredAchievements = this.achievements.filter(
        achievement => achievement.year.toString() === this.selectedYear
      );
    }
  }
}
