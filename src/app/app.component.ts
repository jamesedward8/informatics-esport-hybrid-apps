import { Component } from '@angular/core';
import { EsportserviceService } from './esportservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  username=""
  password=""
  fullname=""

  constructor(private esportservice: EsportserviceService) {  
    this.username = localStorage.getItem("app_username") ?? '';
    this.fullname = localStorage.getItem("app_fullname") ?? '';
  }

  login() {
    this.esportservice.login(this.username,this.password).subscribe(
      (response: any) => {
        if(response.result==='success'){
          alert("success")
          this.fullname=response.fullname
          localStorage.setItem("app_username",this.username)
          localStorage.setItem("app_fullname",this.fullname)
        }
        else{
          alert(response.message)
        }
   });
  }

  logout()
  {
    this.username=""
    this.fullname=""
    localStorage.removeItem("app_username")
    localStorage.removeItem("app_fullname")
  }
}
