import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EsportserviceService, Game, Achievement } from 'src/app/esportservice.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  achievements: Achievement[] = [];     
  games: Game[] = [];
  gameName: string = "";
  selectedYear: string = "All";
  selectedAchievements: any[] = [];
  years: string[] = ['All', '2021', '2022', '2023'];
  banner: string = "";
  achievement: any[] = [];
  selectedGame: any

  constructor(private route: ActivatedRoute, private esportservice:EsportserviceService) {}

  ngOnInit() {
    this.achievements = this.esportservice.achievements;
    this.games = this.esportservice.games;
    this.route.params.subscribe(params => {
      this.gameName = params['name'];
      this.getSelectedGameAchievements();
    });
  }

  getSelectedGameAchievements() {
    this.selectedGame = this.games.find(game => game.name === this.gameName);

    if (this.selectedGame) {
      const gameAchievements = this.achievements.find(achievement => achievement.name === this.gameName);
      
      if (gameAchievements) {
        this.achievement = gameAchievements.achievements; 
        this.selectedAchievements = this.achievement; 
      }
      this.banner = this.selectedGame.banner; 
    }
  }

  getSelectedYearAchivements() {
    if (this.selectedYear === "All") {
      this.selectedAchievements = this.achievement; 
    } 
    else {
      this.selectedAchievements = this.achievement.filter(
        achievement => achievement.year.toString() === this.selectedYear
      );
    }
  }
}