import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
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
