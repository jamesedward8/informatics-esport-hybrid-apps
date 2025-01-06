import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Company {
  nama: string;
  description: string;
}

export interface Game {
  idgame: number;
  name: string;
  description: string;
  banner: string;
}

export interface GameID {
  idgame: number;
}

export interface MemberID {
  idmember: number;
}

export interface Team {
  idteam: number;
  idgame: number;
  name: string;
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
  
  link = "https://ubaya.xyz/hybrid/160422023/project/";
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();

    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();

    return this.http.post(this.link + "loginesport.php", urlEncodedData, { headers });
  }

  signUp(firstName: string, lastName: string, username: string, password: string, profile: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();

    body.set('firstName', firstName);
    body.set('lastName', lastName);
    body.set('username', username);
    body.set('password', password);
    body.set('profile', profile);
    const urlEncodedData = body.toString();

    return this.http.post(this.link + "signup.php", urlEncodedData, { headers });
  }

  companyList(): Observable<any> {
    return this.http.get(this.link + "company.php");
  }

  gameList(): Observable<any> {
    return this.http.get(this.link + "games.php");
  }

  achievementList(p_name: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    
    body.set('name', p_name);
    const urlEncodedData = body.toString();

    return this.http.post<any>(
      this.link + "achievements.php", urlEncodedData, { headers });
  }

  teamList(p_idgame: number): Observable<Team[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    
    body.set('idgame', p_idgame.toString());
    const urlEncodedData = body.toString();

    return this.http.post<Team[]>(
      this.link + "team.php", urlEncodedData, { headers });
  }

  proposalList(p_idmember: number): Observable<Team[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    
    body.set('idmember', p_idmember.toString());
    const urlEncodedData = body.toString();

    return this.http.post<Team[]>(
      this.link + "proposalList.php", urlEncodedData, { headers });
  }

  scheduleList(): Observable<any> {
    return this.http.get(this.link + "scheduleList.php");
  }

  scheduleDetail(p_name: string): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    
    body.set('name', p_name.toString());
    const urlEncodedData = body.toString();

    return this.http.post<any>(
      this.link + "scheduleDetail.php", urlEncodedData, { headers });
  }

  getGameIdbyName(p_name: string): Observable<GameID[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    
    body.set('name', p_name.toString());
    const urlEncodedData = body.toString();

    return this.http.post<GameID[]>(
      this.link + "getSelectedGame.php", urlEncodedData, { headers });
  }

  getTeamIdbyName(p_name: string): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    
    body.set('name', p_name.toString());
    const urlEncodedData = body.toString();

    return this.http.post<any>(
      this.link + "getSelectedTeam.php", urlEncodedData, { headers });
  }

  getMemberIdbyName(p_username: string): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    
    body.set('username', p_username.toString());
    const urlEncodedData = body.toString();

    return this.http.post<any>(
      this.link + "getSelectedMember.php", urlEncodedData, { headers });
  }

  teamMember(p_idmember: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    
    body.set('idteam', p_idmember.toString());
    const urlEncodedData = body.toString();
    return this.http.post<any>(
      this.link + "team_members.php", urlEncodedData, { headers });
  }

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
}