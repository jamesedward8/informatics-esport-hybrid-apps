import { Component, OnInit } from '@angular/core';
import { EsportserviceService, Game, Team } from '../esportservice.service';
import { getActionCache } from '@angular/core/primitives/event-dispatch';

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
        console.log(this.game);
      }
    )
  }

  getMemberIdbyName(){
      this.esportservice.getMemberIdbyName(this.username).subscribe(
        (data: any)=>{
          console.log("Response from getMemberIdbyName:", data);
          if (data && data.idmember) {
            this.p_idmember = data.idmember; // Access the nested idmember
            console.log("ID Member successfully fetched:", this.p_idmember);
          } 
          else {
            console.error("Unexpected response or empty result:", data.message);
            alert("Member not found.");
          }
        },
        (error) => {
          console.error("Error fetching Member ID:", error);
          alert("Unable to fetch Member ID. Please try again.");
        }
        
      )
  }

  selectedTeam(){
    if(this.selectedIdGame != null){
      this.esportservice.teamList(this.selectedIdGame).subscribe(
        (data)=> {
          this.team = data;
          console.log(this.team);
        }
      )
    }
  }

  applyTeam() {
    this.getMemberIdbyName();
    // Call getMemberIdbyName to fetch the ID first
    this.esportservice.getMemberIdbyName(this.username).subscribe(
      (data: any) => {
        this.p_idmember = data.idmember; // Assign fetched ID to p_idmember
        console.log("ID Member:", this.p_idmember);
  
        // Proceed with the application process after ID is fetched
        console.log({
          idmember: this.p_idmember,
          idteam: this.p_idteam,
          description: this.p_description,
          status: this.p_status,
          img: this.p_img,
        });
  
        this.esportservice.addProposal(this.p_idmember, this.p_idteam, this.p_description, this.p_status, this.p_img).subscribe(
          (response: any) => {
            if (response.result === 'success') {
              alert("Proposal is being processed");
            } else {
              alert(response.message);
            }
          },
          (error) => {
            console.error("Error submitting proposal:", error);
            alert("An error occurred while submitting the proposal.");
          }
        );
      },
      (error) => {
        console.error("Error fetching Member ID:", error);
        alert("Unable to fetch Member ID. Please try again.");
      }
    );
  }
  
}
