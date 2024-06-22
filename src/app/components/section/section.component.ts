import { Component, Input } from '@angular/core';

export type Section = {
  title: string;
  subtitle: string;
};
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
