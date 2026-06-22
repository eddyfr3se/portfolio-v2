import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../models/project';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  // description ist ein Übersetzungs-Schlüssel, der Text steht in den i18n-Dateien
  projects: Project[] = [
    {
      name: 'Join',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'projects.join',
      image: 'assets/img/project-join.png',
      githubUrl: '#',
    },
    {
      name: 'Pollo Loco',
      stack: 'JavaScript | HTML | CSS',
      description: 'projects.polloLoco',
      image: 'assets/img/project-pollo-loco.png',
      githubUrl: 'https://github.com/eddyfr3se/Pollo-Loco-',
    },
    {
      name: 'DA Bubble',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'projects.daBubble',
      image: 'assets/img/project-da-bubble.png',
      githubUrl: '#',
    },
    {
      name: 'Pokédex',
      stack: 'JavaScript | HTML | CSS | Api',
      description: 'projects.pokedex',
      image: 'assets/img/project-pokedex.png',
      githubUrl: 'https://github.com/eddyfr3se/Pokedex-',
    },
  ];
}
