import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EsportserviceService, Game, Achievement } from 'src/app/esportservice.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  achievements: any = [];
  games: Game[] = [];
  gameName: string = '';
  selectedYear: string = 'All';
  selectedAchievements: any[] = [];
  years: string[] = [];
  banner: string = '';

  constructor(private route: ActivatedRoute, private esportservice:EsportserviceService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameName = params['name'];
      
      this.esportservice.getGameIdbyName(this.gameName).subscribe(
        (data: any)=>{
          this.banner = data.banner;
        }
      );

      this.esportservice.achievementList(this.gameName).subscribe(
        (data: any)=>{
          this.achievements = data;
          this.extractYearsFromAchievements();
          this.filterAchievementsByYear();
        }
      );
    });
  }

  extractYearsFromAchievements() {
    const yearsSet = new Set<string>();
    this.achievements.forEach((achievement: any) => {
      const year = new Date(achievement.date).getFullYear().toString();
      yearsSet.add(year);
    });

    this.years = Array.from(yearsSet).sort((a, b) => parseInt(b) - parseInt(a));
  }

  filterAchievementsByYear() {
    if (this.selectedYear === 'All') {
      this.selectedAchievements = this.achievements;
    } 
    else {
      this.selectedAchievements = this.achievements.filter(
        (achievement: any) => new Date(achievement.date).getFullYear().toString() === this.selectedYear
      );
    }
  }

  getSelectedYearAchievements() {
    this.filterAchievementsByYear();
  }
}