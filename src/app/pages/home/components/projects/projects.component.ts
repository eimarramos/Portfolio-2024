import { Component } from '@angular/core';
import { Card, CardComponent, Section } from '../../../../components';
import { SectionComponent } from '../../../../components/section/section.component';
import { ProjectCardComponent } from './components';
import { Project } from './types';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [SectionComponent, CardComponent, ProjectCardComponent],
})
export class ProjectsComponent {
  projectsSection: Section = {
    title: 'PROYECTOS',
    subtitle: 'Proyectos realizados',
  };

  projects: Project[] = [
    {
      picture: './assets/images/PeritajesDesktop.png',
      title: 'Angular',
      summary: 'Angular es un framework de desarrollo de aplicaciones web',
      technologies: ['Angular', 'Typescript', 'Tailwind'],
      images: [],
      description: 'Angular es un framework de desarrollo de aplicaciones web',
    },
  ];
}
