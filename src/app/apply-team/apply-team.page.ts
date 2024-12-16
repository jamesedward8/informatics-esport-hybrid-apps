import { Component, OnInit } from '@angular/core';
import { EsportserviceService } from '../esportservice.service';

@Component({
  selector: 'app-apply-team',
  templateUrl: './apply-team.page.html',
  styleUrls: ['./apply-team.page.scss'],
})
export class ApplyTeamPage implements OnInit {
  proposal: any[] = [];
  username: string;
  p_idmember: number = 0;

  constructor(private esportservice: EsportserviceService) { 
    this.username = localStorage.getItem("app_username") ?? '';
  }

  ngOnInit() {
    this.esportservice.getMemberIdbyName(this.username).subscribe(
      (data: any) => {
        if (data && data.idmember) {
          this.p_idmember = data.idmember; 
          this.getProposalList();
        } 
        else {
          alert("Unable to find member ID.");
        }
      },
      (error) => {
        alert("An error occurred while fetching Member ID.");
      }
    );
  }

  getProposalList() {
    this.esportservice.proposalList(this.p_idmember).subscribe(
      (data) => {
        this.proposal = data;
      },
      (error) => {
        alert("An error occurred while fetching the proposal list.");
      }
    );
  }
}
