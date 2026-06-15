import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Projects } from '../../components/projects/projects';
import { References } from '../../components/references/references';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Projects, References],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
