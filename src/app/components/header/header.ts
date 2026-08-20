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

  get isHome() {
    const path = this.router.url.split('#')[0].split('?')[0];
    return path === '/';
  }

  lang = globalThis.localStorage?.getItem('lang') ?? 'de';

  menuOpen = false;

  setLang(value: string) {
    this.lang = value;
    this.translate.use(value);
    globalThis.localStorage?.setItem('lang', value);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
