import { Component, Input } from '@angular/core';
import { Section } from '../../shared';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent {
  @Input() section?: Section;
}
