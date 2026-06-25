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
  projects: Project[] = [
    {
      name: 'Pollo Loco',
      stack: 'JavaScript | HTML | CSS',
      description: 'projects.polloLoco',
      image: 'assets/img/project-pollo-loco.png',
      githubUrl: 'https://github.com/eddyfr3se/Pollo-Loco-',
      liveUrl: 'https://pollo-loco.christopherrauch.de',
    },
    {
      name: 'Pokédex',
      stack: 'JavaScript | HTML | CSS | Api',
      description: 'projects.pokedex',
      image: 'assets/img/project-pokedex.png',
      githubUrl: 'https://github.com/eddyfr3se/Pokedex-',
      liveUrl: 'https://pokedex.christopherrauch.de',
    },
  ];
}
