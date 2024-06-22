import { Component } from '@angular/core';
import { CardComponent } from '../../../../components';
import { SectionComponent } from '../../../../components/section/section.component';
import { Section } from '../../../../shared';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css',
  imports: [CardComponent, SectionComponent],
})
export class KnowledgeComponent {
  knowledge: Section = {
    title: 'ÁREAS DONDE TENGO EXPERIENCIA',
    subtitle: 'Conocimientos',
  };
}
