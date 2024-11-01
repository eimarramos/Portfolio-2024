import { Component } from '@angular/core';
import {
  ExperienceComponent,
  HeroComponent,
  KnowledgeComponent,
  ProjectsComponent,
  TechStackComponent,
} from './components';
import { Article, ArticleComponent } from '../../components';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    HeroComponent,
    ArticleComponent,
    KnowledgeComponent,
    TechStackComponent,
    ProjectsComponent,
    ExperienceComponent,
    SectionComponent,
  ],
})
export class HomeComponent {
  aboutMe: Article = {
    title: 'SOBRE MÍ',
    subtitle: 'Introducción',
    content: `Estoy graduado como Técnico Superior en Desarrollo de Aplicaciones Multiplataforma. Actualmente, 
              estoy ampliando mis estudios y trabajando en proyectos personales para desarrollar habilidades prácticas y 
              explorar nuevas áreas, especialmente en desarrollo móvil y web. Disfruto aprendiendo nuevas tecnologías, 
              resolviendo desafíos y mejorando continuamente como desarrollador.`,
  };
}
