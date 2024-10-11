import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { EsportserviceService, Member, Game } from 'src/app/esportservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  games:Game[] = [];
  teams:Member[] = [];
  name: string = "";
  game:any
  bannerUrl: string = "";  
  selectedTeams: any[] = [];

  constructor(private route:ActivatedRoute, private esportservice:EsportserviceService) { }

  ngOnInit() {
    this.games = this.esportservice.games;
    this.teams = this.esportservice.members;

    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.loadGame();
    });
  }

  loadGame() {
    this.game = this.games.find(game => game.name === this.name);

    if (this.game) {
      const selectedGame = this.teams.find(team => team.name === this.name)

      if(selectedGame){
        this.selectedTeams = selectedGame.teams;
      }
      this.bannerUrl = this.game.bannerUrl;
    }
  }
}
