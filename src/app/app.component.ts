import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isHomePage: boolean = false;

  constructor(private router: Router) {
    // Cek URL yang aktif setiap kali navigasi berubah
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Tentukan apakah URL aktif adalah 'home'
        this.isHomePage = event.url === '/home' || event.urlAfterRedirects === '/home';
      }
    });
  }
 
}
