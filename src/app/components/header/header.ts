import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private router = inject(Router);
  private translate = inject(TranslateService);

  // auf Unterseiten (z.B. Privacy) sieht der Header anders aus (blaues Logo)
  get isHome() {
    return this.router.url === '/';
  }

  // aktuelle Sprache, beim Start aus localStorage (sonst Deutsch)
  lang = localStorage.getItem('lang') ?? 'de';

  // Burger-Menü auf/zu
  menuOpen = false;

  setLang(value: string) {
    this.lang = value;
    this.translate.use(value);
    localStorage.setItem('lang', value);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
