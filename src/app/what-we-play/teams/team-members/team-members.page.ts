import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.page.html',
  styleUrls: ['./team-members.page.scss'],
})
export class TeamMembersPage implements OnInit {

  teamName: string = "";
  gameName: string = "";
  members: any[] = [];
  bannerUrl: string = "";

  games = [
    {
      name: 'Valorant',
      teams: [
        { 
          name: 'Team A', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA1', role: 'Attacker' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA2', role: 'Defender' }
          ] 
        },
        { 
          name: 'Team B', 
          members: [
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerB1', role: 'Sniper' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB2', role: 'Support' }
          ] 
        }
      ],
      bannerUrl: 'https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg'
    },
    {
      name: 'PUBG',
      teams: [
        { 
          name: 'Team F', 
          members: [
            { avatar: 'https://w7.pngwing.com/pngs/152/155/png-transparent-male-man-person-business-avatar-icon.png', nickname: 'PlayerF1', role: 'Leader' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerF2', role: 'Scout' }
          ] 
        }
      ],
      bannerUrl: 'https://gambar.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/07/1-68.jpg'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.teamName = params['team'];
      this.gameName = params['game'];
      this.loadMembers();
    });
  }

  loadMembers() {
    const selectedGame = this.games.find(game => game.name === this.gameName);
    if (selectedGame) {
      this.bannerUrl = selectedGame.bannerUrl;
      const selectedTeam = selectedGame.teams.find(team => team.name === this.teamName);
      if (selectedTeam) {
        this.members = selectedTeam.members;
      }
    }
  }
}
