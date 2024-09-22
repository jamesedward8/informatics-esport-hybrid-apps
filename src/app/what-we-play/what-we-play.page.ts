import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-play',
  templateUrl: './what-we-play.page.html',
  styleUrls: ['./what-we-play.page.scss'],
})
export class WhatWePlayPage implements OnInit {
  games = [
    {
      id: 1,
      bannerUrl: 'https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg',
      name: 'Game 1',
      description: 'This is a description of Game 1. Our team participated in this e-sports competition.',
    },
    {
      id: 2,
      bannerUrl: 'https://gambar.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/07/1-68.jpg',
      name: 'Game 2',
      description: 'This is a description of Game 2. A great competition with exciting moments.',
    },
    {
      id: 3,
      bannerUrl: 'https://example.com/banner3.jpg',
      name: 'Game 3',
      description: 'This is a description of Game 3. A thrilling tournament where our team excelled.',
    },
    {
      id: 4,
      bannerUrl: 'https://example.com/banner4.jpg',
      name: 'Game 4',
      description: 'This is a description of Game 4. A thrilling tournament where our team excelled.',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
