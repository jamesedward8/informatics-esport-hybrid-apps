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

  constructor(private esportservice: EsportserviceService) { }

  ngOnInit() {
  }

}
