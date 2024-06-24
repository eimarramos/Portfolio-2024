import { Component } from '@angular/core';
import {
  HeroComponent,
  KnowledgeComponent,
  ProjectsComponent,
  TechStackComponent,
} from './components';
import { Article, ArticleComponent } from '../../components';
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
  ],
})
export class HomeComponent {
  aboutMe: Article = {
    title: 'SOBRE MÍ',
    subtitle: 'Introducción',
    content: `Me llamo Eimar y mi interés por el desarrollo de software y la tecnología en general siempre ha
              estado presente, pero hace 4 años tomé la decisión de dedicarme completamente a ello. Al principio, no 
              estaba muy convencido, pero desde entonces he estado disfrutando aprendiendo y estudiando constantemente.`,
  };
}
