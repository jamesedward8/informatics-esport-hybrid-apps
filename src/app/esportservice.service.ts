import { Injectable } from '@angular/core';

export interface Game {
  name: string;
  bannerUrl: string;
  description: string;
}

export interface Event {
  date: string;
  time: string;
  title: string;
  shortdesc: string;
  description: string;
  game: string;
  team: string;
  place: string;
  banner: string;
}

export interface Achievement {
  name: string;
  achievements: AchievementDetail[];
}

export interface AchievementDetail {
  name: string;
  team: string;
  year: number;
}

export interface Member {
  name: string;
  teams: TeamDetail[];
}

export interface TeamDetail {
  name: string;
  members: MemberDetail[];
}

export interface MemberDetail {
  avatar: string;
  nickname: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class EsportserviceService {

  constructor() { }

  games:Game[] = [
    {
      name: 'Valorant',
      bannerUrl: 'https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg',
      description: 'Valorant adalah game first-person shooter (FPS) berbasis tim yang dikembangkan oleh Riot Games. Pemain dibagi menjadi dua tim beranggotakan lima orang, dengan satu tim menyerang dan yang lainnya bertahan. Setiap pemain memilih agen dengan kemampuan khusus yang dapat digunakan untuk mendukung strategi tim. Objektifnya adalah untuk menanam atau menjinakkan bom (Spike) tergantung peran tim. Valorant menonjol karena kombinasinya antara tembak-menembak yang cepat dan elemen taktis yang bergantung pada kemampuan setiap agen.',
    },
    {
      name: 'PUBG',
      bannerUrl: 'https://gambar.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/07/1-68.jpg',
      description: 'PUBG adalah game battle royale yang dikembangkan oleh PUBG Corporation. Pemain akan terjun dari pesawat ke peta besar dan harus bertahan hidup di lingkungan yang semakin menyempit sambil mengumpulkan senjata, perlengkapan, dan kendaraan. Hingga 100 pemain bisa berpartisipasi dalam satu pertandingan, baik dalam mode solo, duo, atau tim. Pemain terakhir atau tim yang bertahan hidup akan menjadi pemenangnya. Game ini terkenal karena gameplay realistis dan peta yang luas.',
    },
    {
      name: 'DOTA 2',
      bannerUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg?t=1724428927',
      description: 'Dota 2 adalah game Multiplayer Online Battle Arena (MOBA) yang dikembangkan oleh Valve. Dua tim yang terdiri dari lima pemain bersaing untuk menghancurkan struktur utama tim lawan yang disebut "Ancient" sambil melindungi struktur mereka sendiri. Setiap pemain memilih satu dari ratusan hero yang memiliki kemampuan unik. Game ini membutuhkan kerjasama tim yang kuat, pengetahuan strategi, dan penguasaan karakter. Dota 2 terkenal dengan tingkat kompetitifnya dan ekosistem esports yang besar.',
    },
    {
      name: 'Mobile Legends: Bang Bang',
      bannerUrl: 'https://praditadirgantara.sch.id/wp-content/uploads/2023/05/turnamen-mobile-legends-sma-pradita-dirgantara.jpeg.webp',
      description: 'Mobile Legends adalah game MOBA yang dirancang khusus untuk perangkat seluler dan dikembangkan oleh Moonton. Dua tim beranggotakan lima pemain bersaing untuk menghancurkan basis lawan sambil mempertahankan basis mereka sendiri. Setiap pemain memilih hero dengan peran khusus seperti Tank, Mage, atau Marksman. Dengan durasi permainan yang lebih singkat dibandingkan MOBA PC, Mobile Legends menonjol karena kemudahan akses dan permainan yang cepat.',
    }
  ];

  achievements: Achievement[] = [
    {
      name: 'Valorant',
      achievements: [
        { team: 'Team Alpha', year: 2023, name: 'Champion' },
        { team: 'Team Bravo', year: 2022, name: 'Top Scorer' }
      ],
    },
    {
      name: 'PUBG',
      achievements: [
        { team: 'Team Champions', year: 2023, name: 'Winner' },
        { team: 'Team Alpha', year: 2021, name: 'MVP' }
      ],
    },
    {
      name: 'DOTA 2',
      achievements: [
        { team: 'Team Bravo', year: 2021, name: 'Top Scorer' },
        { team: 'Team Delta', year: 2022, name: 'Semi-Finalist' }
      ],
    },
    {
      name: 'Mobile Legends: Bang Bang',
      achievements: [
        { team: 'Team Legends', year: 2023, name: 'Champion' },
        { team: 'Team Warriors', year: 2021, name: 'Finalist' }
      ],
    }
  ];

  events:Event[] = [
    {
      date: '2024-10-01',
      time: '15:00',
      title: 'VCT Pacific',
      shortdesc: 'Exciting match scheduled for the afternoon.',
      description: 'Join us for an exciting match in the VCT Pacific tournament, where the top teams from around the region will battle it out in a high-stakes, action-packed showdown. Expect intense gameplay, strategic plays, and non-stop action as Team A faces their toughest challenge yet. Whether you are a casual viewer or a dedicated fan of Valorant, this is a must-watch event that promises to deliver thrilling moments and unforgettable highlights. Be sure to arrive early to secure a good seat and soak in the electric atmosphere at Gelora Bung Karno, Surabaya!',
      game: 'Valorant',
      team: 'Team A',
      place: 'Gelora Bung Karno, Surabaya',
      banner: 'https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg'
    },  
    {
      date: '2024-10-05',
      time: '18:00',
      title: 'MPL ID S14',
      shortdesc: 'Join us for a live stream on our YouTube channel.',
      description: 'Experience the intensity of Mobile Legends: Bang Bang like never before in the MPL ID S14 live stream. Team B will showcase their skills and strategies in a highly anticipated match, streaming live on our YouTube channel. Fans around the world are invited to tune in and watch this exciting clash of titans as the best players go head-to-head in this season’s top event. Don’t miss out on the chance to see your favorite teams and players in action, and be part of the exhilarating journey as the competition unfolds!',
      game: 'Mobile Legends: Bang Bang',
      team: 'Team B',
      place: 'Jatim Expo, Surabaya',
      banner: 'https://praditadirgantara.sch.id/wp-content/uploads/2023/05/turnamen-mobile-legends-sma-pradita-dirgantara.jpeg.webp'
    },
    {
      date: '2024-10-10',
      time: '10:00',
      title: 'PMSL SEA Fall',
      shortdesc: 'Workshop focusing on team strategy and gameplay.',
      description: 'PMSL SEA Fall is bringing together some of the finest teams from the Southeast Asia region for a workshop and live match event. This interactive session is designed to give fans an inside look into how professional PUBG teams develop strategies and perfect their gameplay. Team C will be leading the session, providing insights into their training regimen, coordination, and tactical decision-making. Join us at Universitas Surabaya for a unique opportunity to learn from the pros and engage with the players in person!',
      game: 'PUBG',
      team: 'Team C',
      place: 'Universitas Surabaya',
      banner: 'https://gambar.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/07/1-68.jpg'
    }
  ];

  members:Member[] = [
    {
      name: 'Valorant',
      teams: [
        { 
          name: 'Team A', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA1', role: 'Attacker' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA2', role: 'Defender' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerA3', role: 'Sniper' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA4', role: 'Support' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA5', role: 'Strategist' }
          ] 
        },
        { 
          name: 'Team B', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB1', role: 'Attacker' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB2', role: 'Defender' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerB3', role: 'Sniper' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB4', role: 'Support' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB5', role: 'Strategist' }
          ] 
        }
      ],
    },
    {
      name: 'PUBG',
      teams: [
        { 
          name: 'Team A', 
          members: [
            { avatar: 'https://w7.pngwing.com/pngs/152/155/png-transparent-male-man-person-business-avatar-icon.png', nickname: 'PlayerA1', role: 'Leader' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA2', role: 'Scout' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerA3', role: 'Sniper' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA4', role: 'Support' }
          ] 
        },
        { 
          name: 'Team B', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB1', role: 'Leader' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB2', role: 'Scout' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerB3', role: 'Sniper' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB4', role: 'Support' }
          ] 
        }
      ],
    },
    {
      name: 'DOTA 2',
      teams: [
        { 
          name: 'Team A', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA1', role: 'Carry' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA2', role: 'Support' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerA3', role: 'Mid' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA4', role: 'Offlane' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA5', role: 'Hard Support' }
          ] 
        },
        { 
          name: 'Team B', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB1', role: 'Carry' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB2', role: 'Support' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerB3', role: 'Mid' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB4', role: 'Offlane' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB5', role: 'Hard Support' }
          ] 
        }
      ],
    },
    {
      name: 'Mobile Legends: Bang Bang',
      teams: [
        { 
          name: 'Team A', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA1', role: 'Tank' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA2', role: 'Marksman' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerA3', role: 'Mage' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerA4', role: 'Support' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerA5', role: 'Fighter' }
          ] 
        },
        { 
          name: 'Team B', 
          members: [
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB1', role: 'Tank' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB2', role: 'Marksman' },
            { avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png', nickname: 'PlayerB3', role: 'Mage' },
            { avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', nickname: 'PlayerB4', role: 'Support' },
            { avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png', nickname: 'PlayerB5', role: 'Fighter' }
          ] 
        }
      ],
    }
  ];
}
