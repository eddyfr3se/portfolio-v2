import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  // Texte sind noch die Platzhalter aus Figma, echte Links kommen später
  projects: Project[] = [
    {
      name: 'Join',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'assets/img/project-join.png',
      githubUrl: '#',
    },
    {
      name: 'Pollo Loco',
      stack: 'JavaScript | HTML | CSS',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: 'assets/img/project-pollo-loco.png',
      githubUrl: '#',
    },
    {
      name: 'DA Bubble',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'A very Simple Customer Relationship Management system working with CRUD functionality.',
      image: 'assets/img/project-da-bubble.png',
      githubUrl: '#',
    },
    {
      name: 'Pokédex',
      stack: 'JavaScript | HTML | CSS | Api',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: 'assets/img/project-pokedex.png',
      githubUrl: 'https://github.com/eddyfr3se/Pokedex-',
    },
  ];
}
