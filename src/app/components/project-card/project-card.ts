import { Component, input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  // Daten kommen vom Parent (projects) rein
  project = input.required<Project>();

  // jede zweite Karte ist gespiegelt (Bild rechts)
  reverse = input(false);
}
