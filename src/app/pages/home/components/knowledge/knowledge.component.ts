import { Component } from '@angular/core';
import { CardComponent } from '../../../../components';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css',
})
export class KnowledgeComponent {}
