import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Game {
  name: string;
  banner: string;
  description: string;
}

export interface Event {
  date: string;
  time: string;
  title: string;
  shortdesc: string;
  description: string;
  game: string;
  team: string;
  place: string;
  banner: string;
}

export interface Achievement {
  name: string;
  achievements: AchievementDetail[];
}

export interface AchievementDetail {
  name: string;
  team: string;
  year: number;
}

export interface Member {
  name: string;
  teams: TeamDetail[];
}

export interface TeamDetail {
  name: string;
  members: MemberDetail[];
}

export interface MemberDetail {
  avatar: string;
  nickname: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class EsportserviceService {
  
  link = "https://ubaya.xyz/hybrid/160422023/";
  constructor(private http: HttpClient) { }


  addProposal(p_idmember: number, p_idteam: number, p_description: string, p_status: string, p_img: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idmember', p_idmember.toString());
    body.set('idteam', p_idteam.toString());
    body.set('description', p_description);
    body.set('status', p_status);
    body.set('img', p_img);
    const urlEncodedData = body.toString();
    return this.http.post(
      this.link + "new_proposal.php", urlEncodedData, { headers });

  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "login.php", urlEncodedData, { headers });
  }

  gameList(): Observable<any> {
    return this.http.get(this.link + "games.php");
  }

  achievementList(): Observable<any> {
    return this.http.get(this.link + "achievements.php");
  }

  teamList(): Observable<any> {
    return this.http.get(this.link + "teams.php");
  }

  teamMember(): Observable<any> {
    return this.http.get(this.link + "team_members.php");
  }

  proposalList(): Observable<any> {
    return this.http.get(this.link + "proposals.php");
  }
}
