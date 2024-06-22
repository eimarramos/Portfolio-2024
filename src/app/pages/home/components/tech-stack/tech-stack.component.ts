import { Component } from '@angular/core';
import {
  Section,
  SectionComponent,
} from '../../../../components/section/section.component';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
  imports: [SectionComponent],
})
export class TechStackComponent {
  techStack: Section = {
    title: 'TECNOLOGÍAS CON LAS QUE ESTOY FAMILIARIZADO',
    subtitle: 'Tecnologías',
  };
}
