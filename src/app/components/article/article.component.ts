import { Component, Input } from '@angular/core';

export type Article = {
  title: string;
  subtitle: string;
  content: string;
};
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  @Input() article?: Article;
}
