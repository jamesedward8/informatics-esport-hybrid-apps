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

      this.esportservice.getGameIdbyName(this.name).subscribe(
        (data: any)=>{
          this.game = data.idgame;
          this.banner = data.banner;

          this.esportservice.teamList(this.game).subscribe(
            (teamData: Team[])=>{
              this.teams = teamData;
            }
          )
        });
        }
      )
  }
}