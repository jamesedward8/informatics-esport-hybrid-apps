import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  gameName: string = "";
  selectedYear: string = "";
  achievements: any[] = [];     
  filteredAchievements: any[] = [];
  years: string[] = ['2021', '2022', '2023'];

  games = [
    {
      name: 'Valorant',
      achievements: [
        { team: 'Team Alpha', year: 2023, name: 'Champion' },
        { team: 'Team Bravo', year: 2022, name: 'Top Scorer' }
      ]
    },
    {
      name: 'PUBG',
      achievements: [
        { team: 'Team Champions', year: 2023, name: 'Winner' },
        { team: 'Team Alpha', year: 2021, name: 'MVP' }
      ]
    },
    {
      name: 'DOTA 2',
      achievements: [
        { team: 'Team Bravo', year: 2021, name: 'Top Scorer' },
        { team: 'Team Delta', year: 2022, name: 'Semi-Finalist' }
      ]
    },
    {
      name: 'Mobile Legends: Bang Bang',
      achievements: [
        { team: 'Team Legends', year: 2023, name: 'Champion' },
        { team: 'Team Warriors', year: 2021, name: 'Finalist' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameName = params['name'];
      this.loadAchievements();
    });
  }

  // Load achievements for the selected game
  loadAchievements() {
    const selectedGame = this.games.find(game => game.name === this.gameName);
    if (selectedGame) {
      this.achievements = selectedGame.achievements;
      this.filteredAchievements = this.achievements; // Default to showing all achievements
    }
  }

  // Filter achievements based on the selected year
  filterAchievements() {
    if (this.selectedYear) {
      this.filteredAchievements = this.achievements.filter(
        achievement => achievement.year.toString() === this.selectedYear
      );
    } else {
      this.filteredAchievements = this.achievements; // If no year selected, show all
    }
  }

}
