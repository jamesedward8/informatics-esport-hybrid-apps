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
      name: 'Valorant',
      description: 'Valorant adalah game first-person shooter (FPS) berbasis tim yang dikembangkan oleh Riot Games. Pemain dibagi menjadi dua tim beranggotakan lima orang, dengan satu tim menyerang dan yang lainnya bertahan. Setiap pemain memilih agen dengan kemampuan khusus yang dapat digunakan untuk mendukung strategi tim. Objektifnya adalah untuk menanam atau menjinakkan bom (Spike) tergantung peran tim. Valorant menonjol karena kombinasinya antara tembak-menembak yang cepat dan elemen taktis yang bergantung pada kemampuan setiap agen.',
    },
    {
      id: 2,
      bannerUrl: 'https://gambar.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/07/1-68.jpg',
      name: 'PUBG',
      description: 'PUBG adalah game battle royale yang dikembangkan oleh PUBG Corporation. Pemain akan terjun dari pesawat ke peta besar dan harus bertahan hidup di lingkungan yang semakin menyempit sambil mengumpulkan senjata, perlengkapan, dan kendaraan. Hingga 100 pemain bisa berpartisipasi dalam satu pertandingan, baik dalam mode solo, duo, atau tim. Pemain terakhir atau tim yang bertahan hidup akan menjadi pemenangnya. Game ini terkenal karena gameplay realistis dan peta yang luas.',
    },
    {
      id: 3,
      bannerUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg?t=1724428927',
      name: 'DOTA 2',
      description: 'Dota 2 adalah game Multiplayer Online Battle Arena (MOBA) yang dikembangkan oleh Valve. Dua tim yang terdiri dari lima pemain bersaing untuk menghancurkan struktur utama tim lawan yang disebut "Ancient" sambil melindungi struktur mereka sendiri. Setiap pemain memilih satu dari ratusan hero yang memiliki kemampuan unik. Game ini membutuhkan kerjasama tim yang kuat, pengetahuan strategi, dan penguasaan karakter. Dota 2 terkenal dengan tingkat kompetitifnya dan ekosistem esports yang besar.',
    },
    {
      id: 4,
      bannerUrl: 'https://praditadirgantara.sch.id/wp-content/uploads/2023/05/turnamen-mobile-legends-sma-pradita-dirgantara.jpeg.webp',
      name: 'Mobile Legends: Bang Bang',
      description: 'Mobile Legends adalah game MOBA yang dirancang khusus untuk perangkat seluler dan dikembangkan oleh Moonton. Dua tim beranggotakan lima pemain bersaing untuk menghancurkan basis lawan sambil mempertahankan basis mereka sendiri. Setiap pemain memilih hero dengan peran khusus seperti Tank, Mage, atau Marksman. Dengan durasi permainan yang lebih singkat dibandingkan MOBA PC, Mobile Legends menonjol karena kemudahan akses dan permainan yang cepat.',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}