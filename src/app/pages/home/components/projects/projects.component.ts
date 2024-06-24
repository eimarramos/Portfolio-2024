import { Component } from '@angular/core';
import { Card, CardComponent, Section } from '../../../../components';
import { SectionComponent } from '../../../../components/section/section.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [SectionComponent, CardComponent],
})
export class ProjectsComponent {
  projects: Section = {
    title: 'PROYECTOS',
    subtitle: 'Proyectos realizados',
  };

  project1: Card = {
    title: 'Peritajes Web / App',
    subtitle: 'Desarrollo de una aplicación web',
  };
}
