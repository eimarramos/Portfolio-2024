import { Component } from '@angular/core';
import { HeroComponent, KnowledgeComponent } from './components';
import { ArticleComponent } from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ArticleComponent, KnowledgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
