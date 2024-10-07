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
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA2', role: 'Defender' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerA3', role: 'Sniper' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA4', role: 'Support' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA5', role: 'Strategist' }
          ] 
        },
        { 
          name: 'Team B', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB1', role: 'Attacker' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB2', role: 'Defender' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerB3', role: 'Sniper' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB4', role: 'Support' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB5', role: 'Strategist' }
          ] 
        }
      ],
      bannerUrl: 'https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg'
    },
    {
      name: 'PUBG',
      teams: [
        { 
          name: 'Team A', 
          members: [
            { avatar: 'https://w7.pngwing.com/pngs/152/155/png-transparent-male-man-person-business-avatar-icon.png', nickname: 'PlayerA1', role: 'Leader' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA2', role: 'Scout' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerA3', role: 'Sniper' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA4', role: 'Support' }
          ] 
        },
        { 
          name: 'Team B', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB1', role: 'Leader' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB2', role: 'Scout' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerB3', role: 'Sniper' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB4', role: 'Support' }
          ] 
        }
      ],
      bannerUrl: 'https://gambar.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/07/1-68.jpg'
    },
    {
      name: 'DOTA 2',
      teams: [
        { 
          name: 'Team A', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA1', role: 'Carry' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA2', role: 'Support' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerA3', role: 'Mid' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA4', role: 'Offlane' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA5', role: 'Hard Support' }
          ] 
        },
        { 
          name: 'Team B', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB1', role: 'Carry' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB2', role: 'Support' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerB3', role: 'Mid' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB4', role: 'Offlane' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB5', role: 'Hard Support' }
          ] 
        }
      ],
      bannerUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg?t=1724428927'
    },
    {
      name: 'Mobile Legends: Bang Bang',
      teams: [
        { 
          name: 'Team A', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA1', role: 'Tank' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA2', role: 'Marksman' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerA3', role: 'Mage' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA4', role: 'Support' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA5', role: 'Fighter' }
          ] 
        },
        { 
          name: 'Team B', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB1', role: 'Tank' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB2', role: 'Marksman' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerB3', role: 'Mage' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB4', role: 'Support' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB5', role: 'Fighter' }
          ] 
        }
      ],
      bannerUrl: 'https://praditadirgantara.sch.id/wp-content/uploads/2023/05/turnamen-mobile-legends-sma-pradita-dirgantara.jpeg.webp'
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
