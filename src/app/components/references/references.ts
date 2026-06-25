import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Testimonial } from '../../models/testimonial';

@Component({
  selector: 'app-references',
  imports: [TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  current = 0;

  testimonials: Testimonial[] = [
    {
      name: '[Name der Referenz]',
      project: 'references.t1Project',
      quote: 'references.t1Quote',
    },
    {
      name: '[Name der Referenz]',
      project: 'references.t2Project',
      quote: 'references.t2Quote',
    },
    {
      name: '[Name der Referenz]',
      project: 'references.t3Project',
      quote: 'references.t3Quote',
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
