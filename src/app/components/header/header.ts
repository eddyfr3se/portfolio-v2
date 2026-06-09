import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // nur Platzhalter, die echte Übersetzung kommt an Tag 12
  lang = 'DE';

  setLang(value: string) {
    this.lang = value;
  }
}
