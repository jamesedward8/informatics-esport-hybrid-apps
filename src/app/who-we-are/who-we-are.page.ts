import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.page.html',
  styleUrls: ['./who-we-are.page.scss'],
})
export class WhoWeArePage implements OnInit {

  likeCount = 0;
  
  constructor() { }

  ngOnInit() {
  }
  
  like() {
    this.likeCount++;
  }

}