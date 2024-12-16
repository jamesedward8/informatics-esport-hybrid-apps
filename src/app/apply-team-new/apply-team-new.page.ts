import { Component, OnInit } from '@angular/core';
import { EsportserviceService, Game, Team } from '../esportservice.service';

@Component({
  selector: 'app-apply-team-new',
  templateUrl: './apply-team-new.page.html',
  styleUrls: ['./apply-team-new.page.scss'],
})
export class ApplyTeamNewPage implements OnInit {

  game:Game[] = []; 
  team:Team[] = [];
  selectedIdGame: number = 0;
  p_idmember:number = 1;
  p_idteam:number = 0;
  p_description:string = "";
  p_status:string = "waiting";
  p_img:string = "TBC";
  alertButtons=['OK'];
  username: string = '';

  constructor(private esportservice:EsportserviceService) { 
    this.username = localStorage.getItem("app_username") ?? '';
  }

  ngOnInit() {
    this.esportservice.gameList().subscribe(
      (data)=>{
        this.game = data;
      }
    )
    this.loadMemberId();
  }

  loadMemberId() {
    this.esportservice.getMemberIdbyName(this.username).subscribe(
      (data: any) => {
        if (data?.idmember) {
          this.p_idmember = data.idmember;
        } 
        else {
          alert("Member not found.");
        }
      },
      (error) => {
        alert("Unable to fetch Member ID. Please try again.");
      }
    );
  }

  loadTeams() {
    if (this.selectedIdGame) {
      this.esportservice.teamList(this.selectedIdGame).subscribe(
        (data) => this.team = data,
        (error) => console.error("Error loading teams:", error)
      );
    }
  }

  applyTeam() {
    if (!this.p_idmember || !this.p_idteam) {
      alert("Please select a valid team and ensure your member ID is loaded.");
      return;
    }

    this.esportservice.addProposal(
      this.p_idmember, 
      this.p_idteam, 
      this.p_description, 
      this.p_status, 
      this.p_img).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("Proposal is being processed.");
        }
        else {
          alert(response.message || "An error occurred.");
        }
      },
      (error) => {
        alert("An error occurred while submitting the proposal.");
      }
    );
  }
}
