import { Component, OnInit } from '@angular/core';
import { EsportserviceService, Game } from '../esportservice.service';

@Component({
  selector: 'app-what-we-play',
  templateUrl: './what-we-play.page.html',
  styleUrls: ['./what-we-play.page.scss'],
})
export class WhatWePlayPage implements OnInit {

  game:Game[] = []; 
  
  constructor(private esportservice:EsportserviceService) { }

  ngOnInit() {
    // this.game = this.esportservice.games;
    this.esportservice.gameList().subscribe(
      (data)=>{
        this.game = data;
      }
    )
  }
}