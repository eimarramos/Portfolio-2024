import { Component } from '@angular/core';
import { HeroComponent } from './components';
import { ArticleComponent } from '../../components/article/article.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ArticleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
