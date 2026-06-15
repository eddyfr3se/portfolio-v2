import { Component } from '@angular/core';
import { Testimonial } from '../../models/testimonial';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  // welche Karte auf Mobile gerade sichtbar ist
  current = 0;

  // Platzhalter aus Figma, echte Zitate liefert noch der Nutzer
  testimonials: Testimonial[] = [
    {
      name: 'James Rugman',
      project: 'Project Join',
      quote:
        '"Sofia is a reliable and friendly person. Work in a structured way and write a clear code. I highly recommend her as a colleague."',
    },
    {
      name: 'Evelyn Marx',
      project: 'Project DA Bubble',
      quote:
        '"Sofia is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code."',
    },
    {
      name: 'Noah Müller',
      project: 'Project Pollo Loco',
      quote:
        '"Sofia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person."',
    },
  ];

  next() {
    this.current = (this.current + 1) % this.testimonials.length;
  }

  prev() {
    this.current =
      (this.current - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
