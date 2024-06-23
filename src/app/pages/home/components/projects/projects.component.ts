import { Component } from '@angular/core';
import { Section } from '../../../../components';
import { SectionComponent } from '../../../../components/section/section.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [SectionComponent],
})
export class ProjectsComponent {
  projects: Section = {
    title: 'PROYECTOS',
    subtitle: 'Proyectos realizados',
  };
}
