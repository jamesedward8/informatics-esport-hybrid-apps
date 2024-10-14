import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EsportserviceService, Game, Member } from 'src/app/esportservice.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.page.html',
  styleUrls: ['./team-members.page.scss'],
})
export class TeamMembersPage implements OnInit {

  teams:Member[] = [];
  games: Game[] = [];
  teamName: string = "";
  gameName: string = "";
  members: Member[] = [];
  banner: string = "";
  game:any;
  team:any;
  selectedTeamDetail: any[] = [];

  constructor(private route: ActivatedRoute, private esportservice:EsportserviceService) {}

  ngOnInit() {
    this.games = this.esportservice.games;
    this.teams = this.esportservice.members;

    this.route.params.subscribe(params => {
      this.teamName = params['team'];
      this.gameName = params['game'];
      this.loadMembers();
    });
  }

  loadMembers() {
    this.game = this.games.find(game => game.name === this.gameName);

    if (this.game) {
      const selectedGame = this.teams.find(team => team.name === this.gameName);

      if (selectedGame) {
        const selectedTeam = selectedGame.teams.find(team => team.name === this.teamName);

        if (selectedTeam) {
          this.selectedTeamDetail = selectedTeam.members; 
        }
      }
      this.banner = this.game.banner;
    }
  }
}