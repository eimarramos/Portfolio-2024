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
      picture: './assets/images/InicioPeritajes.png',
      title: 'Facturas de peritajes',
      summary:
        'Desarrollé una solución para Lodisna con una app móvil en Xamarin, una web en Angular y un backend en ASP.NET Core para gestionar peritajes.',
      technologies: ['Angular', 'Typescript', 'C#', 'Xamarin', 'ASP.NET Core'],
      images: [],
      description: 'Angular es un framework de desarrollo de aplicaciones web',
    },
  ];
}
