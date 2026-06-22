import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  imports: [TranslatePipe],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  project = input.required<Project>();

  reverse = input(false);
}
