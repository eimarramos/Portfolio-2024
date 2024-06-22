import { Component, Input } from '@angular/core';

export type Card = {
  title: string;
  subtitle: string;
  content: string;
};
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() card?: Card;
}
