import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EsportserviceService, Game, Member } from 'src/app/esportservice.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.page.html',
  styleUrls: ['./team-members.page.scss'],
})
export class TeamMembersPage implements OnInit {

  games: Game[] = [];
  teamName: string = "";
  gameName: string = "";
  members: any
  banner: string = "";
  username: string= "";
  p_idteam: number = 0;

  constructor(private route: ActivatedRoute, private esportservice:EsportserviceService) {
    this.username = localStorage.getItem("app_username") ?? '';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.teamName = params['team'];
      this.gameName = params['game'];

      this.esportservice.getGameIdbyName(this.gameName).subscribe(
      (data: any)=>{
        this.banner = data.banner;
      });

      this.esportservice.getTeamIdbyName(this.teamName).subscribe(
        (data: any) => {
          this.p_idteam = data.idteam; 

          this.esportservice.teamMember(this.p_idteam).subscribe(
            (data)=>{
              this.members = data;
            }
          )
        },
        (error) => {
          alert("An error occurred while fetching Member ID.");
        }
      );
    });
  }
}