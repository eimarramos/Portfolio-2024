import { Component } from '@angular/core';
import {
  Section,
  SectionComponent,
} from '../../../../components/section/section.component';
import { CardComponent } from '../../../../components/card/card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionComponent, CardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experience: Section = {
    title: 'EXPERIENCIA',
    subtitle: 'Trabajo en el desarrollo de software',
  };
}
