import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { EsportserviceService, GameID, Game, Team } from 'src/app/esportservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  games:Game[] = [];
  teams:Team[] = [];
  name: string = "";
  game:any    
  banner: string = "";  

  constructor(private route:ActivatedRoute, private esportservice:EsportserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      console.log("Team Name:", this.name)

      this.esportservice.getTeamIdbyName(this.name).subscribe(
        (data: GameID[])=>{
          this.game = data;
          console.log("ID Game:", this.game)

          this.esportservice.teamList(this.game.idgame).subscribe(
            (teamData: Team[])=>{
              this.teams = teamData;
              console.log("Teams:", this.teams);
            }
          )
        });
        }
      )
  }
}