import { Component } from '@angular/core';
import {
  HeroComponent,
  KnowledgeComponent,
  TechStackComponent,
} from './components';
import { ArticleComponent } from '../../components';
import { Article } from '../../shared';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ArticleComponent,
    KnowledgeComponent,
    TechStackComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  aboutMe: Article = {
    title: 'Sobre mí',
    subtitle: 'INTRODUCCIÓN',
    content: `Soy un apasionado de la programación. Estoy buscando una oportunidad
              para aplicar mis habilidades en un entorno colaborativo, donde pueda
              contribuir al desarrollo de aplicaciones versátiles y eficientes. Soy proactivo,
              aprendo rápidamente y tengo un fuerte compromiso con el trabajo en
              equipo. Estoy ansioso por formar parte de un equipo dinámico y contribuir al
              éxito de proyectos innovadores en el campo del desarrollo de software.`,
  };
}
