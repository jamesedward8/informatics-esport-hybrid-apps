import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EsportserviceService, Game, Achievement } from 'src/app/esportservice.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  gameName: string = "";
  selectedYear: string = "All";
  achievements: Achievement[] = [];     
  games: Game[] = [];
  filteredAchievements: any[] = [];
  years: string[] = ['All', '2021', '2022', '2023'];
  bannerUrl: string = "";
  achievement: any[] = [];
  selectedGame:any

  constructor(private route: ActivatedRoute, private esportservice:EsportserviceService) {}

  ngOnInit() {
    this.achievements = this.esportservice.achievements;
    this.games = this.esportservice.games;

    this.route.params.subscribe(params => {
      this.gameName = params['name'];
      this.loadAchievements();
    });
  }

  loadAchievements() {
    this.selectedGame = this.games.find(game => game.name === this.gameName);

    if (this.selectedGame) {
      const gameAchievements = this.achievements.find(achievement => achievement.name === this.gameName);
      
      if (gameAchievements) {
        this.achievement = gameAchievements.achievements; 
        this.filteredAchievements = this.achievement; 
      }
      this.bannerUrl = this.selectedGame.bannerUrl; 
    }
  }

  filterAchievements() {
    if (this.selectedYear === "All") {
      this.filteredAchievements = this.achievement; 
    } 
    else {
      this.filteredAchievements = this.achievement.filter(
        achievement => achievement.year.toString() === this.selectedYear
      );
    }
  }
}
