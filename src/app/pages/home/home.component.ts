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
    content: `Me llamo Eimar y mi interés por el desarrollo de software y la tecnología en general siempre ha
              estado presente, pero hace 4 años tomé la decisión de dedicarme completamente a ello. Desde entonces he estado disfrutando aprendiendo y estudiando constantemente.`,
  };
}
