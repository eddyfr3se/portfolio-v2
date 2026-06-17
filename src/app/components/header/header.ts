import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private router = inject(Router);

  // auf Unterseiten (z.B. Privacy) sieht der Header anders aus (blaues Logo)
  get isHome() {
    return this.router.url === '/';
  }

  // nur Platzhalter, die echte Übersetzung kommt an Tag 12
  lang = 'EN';

  // Burger-Menü auf/zu
  menuOpen = false;

  setLang(value: string) {
    this.lang = value;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
