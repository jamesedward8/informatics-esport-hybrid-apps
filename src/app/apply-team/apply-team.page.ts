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
          this.p_idmember = data.idmember; // Assign fetched idmember
          console.log("ID Member:", this.p_idmember);

          // Fetch the proposal list using idmember
          this.getProposalList();
        } else {
          console.error("Member not found:", data);
          alert("Unable to find member ID.");
        }
      },
      (error) => {
        console.error("Error fetching Member ID:", error);
        alert("An error occurred while fetching Member ID.");
      }
    );
  }

  getProposalList() {
    // Fetch proposal list using the fetched idmember
    this.esportservice.proposalList(this.p_idmember).subscribe(
      (data) => {
        this.proposal = data; // Assign proposal data
        console.log("Proposal List:", this.proposal);
      },
      (error) => {
        console.error("Error fetching proposal list:", error);
        alert("An error occurred while fetching the proposal list.");
      }
    );
  }
}
