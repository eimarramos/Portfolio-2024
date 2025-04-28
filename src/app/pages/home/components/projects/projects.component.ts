import { Component } from '@angular/core';
import { Section } from '../../../../components';
import { SectionComponent } from '../../../../components/section/section.component';
import { ProjectCardComponent } from './components';
import { Project } from './types';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [SectionComponent, ProjectCardComponent],
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
      technologies: ['Angular', 'Typescript', 'C#', 'Xamarin', 'ASP.NET Core', 'Entity Framework', '.NET 8', 'Xamarin'],
      images: [
        'assets/images/PeritajesWeb1.png',
        'assets/images/PeritajesWeb2.png',
        'assets/images/PeritajesWeb3.png',
        'assets/images/PeritajesWeb4.png',
        'assets/images/AppPeritajes1.png',
        'assets/images/AppPeritajes2.png',
        'assets/images/AppPeritajes3.png',
      ],
      description: [
        'En el proyecto para Lodisna, desarrollé una solución integral que incluye una aplicación móvil, una plataforma web y un backend. Utilizando Xamarin, Angular y ASP.NET Core, logramos crear unaherramienta eficiente y funcional para gestionar peritajes y generaractas para los conductores.',
        'Utilicé Xamarin para desarrollar una aplicación móvil que permite a los usuarios capturar fotos de peritajes y añadir notas adicionales. La app facilita la documentación visual de los peritajes.',
        'Para la plataforma web, implementé una solución con Angular que gestiona los peritajes capturados. Los administradores pueden visualizar, editar y gestionar peritajes y notas a través de una interfaz.',
        'El backend, basado en ASP.NET Core, asegura la integridad y seguridad de los datos, permitiendo una comunicación fluida entre la aplicación móvil y la web.',
      ],
    },
    {
      picture: './assets/images/InicioDoppio.png',
      title: 'Doppio',
      summary:
        'Desarrolle una applicación movil hecho en MAUI aplicando arquitectura hexagonal y aplicando buenas practicas para afianzar mis conocimientos en C#, .NET y probar las novedades de .NET 9.',
      technologies: [
        'C#',
        'MAUI',
        'XAML',
        '.NET 9',
        'Entity Framework',
        'SQLite',
      ],
      images: [
        'assets/images/DoppioImagen1.png',
        'assets/images/DoppioImagen2.png',
        'assets/images/DoppioImagen3.png',
        'assets/images/DoppioImagen4.png',
        'assets/images/DoppioImagen5.png',
        'assets/images/DoppioImagen6.png',
        'assets/images/DoppioImagen7.png',
      ],
      description: [
        'Desarrollé una aplicación móvil con MAUI, aplicando la arquitectura hexagonal para garantizar modularidad, mantenibilidad y separación de responsabilidades. El proyecto me permitió profundizar en C# y el ecosistema .NET, explorando buenas prácticas como principios SOLID y inyección de dependencias.',
        'La app incluye una interfaz adaptable multiplataforma (Android/iOS), integración con APIs REST, persistencia de datos con SQLite, y gestión del estado con MVVM. También aproveché las novedades de .NET 9, como mejoras en rendimiento y nuevas características del lenguaje. Este proyecto fue clave para afianzar mis conocimientos en desarrollo profesional y tecnologías modernas.',
      ],
      githubUrl: 'https://github.com/eimarramos/Doppio',
    },
  ];
}
