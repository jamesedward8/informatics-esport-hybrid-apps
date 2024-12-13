  import { Component, OnInit } from '@angular/core';
  import { Company, EsportserviceService } from '../esportservice.service';

  @Component({
    selector: 'app-who-we-are',
    templateUrl: './who-we-are.page.html',
    styleUrls: ['./who-we-are.page.scss'],
  })
  export class WhoWeArePage implements OnInit {

    likeCount = 0;
    company: Company[] = [];
    
    constructor(private esportservice: EsportserviceService) { }

    ngOnInit() {
      this.esportservice.companyList().subscribe(
        (data)=>{
          this.company = data;
        }
      )
    }
    
    like() {
      this.likeCount++;
    }
  }