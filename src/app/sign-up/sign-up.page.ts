import { Component, OnInit } from '@angular/core';
import { EsportserviceService } from '../esportservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  firstName: string = ""
  lastName: string = ""
  username: string = ""
  password: string = ""
  repeatPassword: string = ""
  profile: string = "member";
  newMember: boolean = false;

  constructor(private esportservice: EsportserviceService) { }

  ngOnInit() {
  }

  signUp() {
    if (!this.firstName || !this.lastName || !this.username || !this.password || !this.repeatPassword) {
      alert("Please fill in all the fields.");
      return; 
    }

    if (this.password !== this.repeatPassword) {
      alert("Passwords do not match. Please try again.");
      return; 
    }

    this.esportservice.signUp(
      this.firstName, 
      this.lastName, 
      this.username, 
      this.password,
      this.profile).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("Congratulations!.");
          
          window.location.href = '/what-we-play';
        }
        else {
          alert(response.message || "An error occurred.");
        }
      },
      (error) => {
        alert("An error occurred.");
      }
    );
  }
}
