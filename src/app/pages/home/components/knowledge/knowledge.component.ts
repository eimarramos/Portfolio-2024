import { Component } from '@angular/core';
import { Card, CardComponent } from '../../../../components';
import {
  Section,
  SectionComponent,
} from '../../../../components/section/section.component';

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

  cards: Card[] = [
    {
      title: 'Frontend',
      subtitle: 'EXPERIENCIA EN DESARROLLO FRONTEND',
      content:
        'Tengo experiencia en el desarrollo de proyectos de Frontend utilizando Angular en entornos de trabajo reales. Además,' +
        'he trabajado con herramientas como Angular Material para crear interfaces de usuario funcionales y estéticamente atractivas.',
    },
    {
      title: 'Backend',
      subtitle: 'EXPERIENCIA EN DESARROLLO BACKEND',
      content:
        'He trabajado en el desarrollo del backend utilizando ASP.NET Core (C#) en un proyecto real, ' +
        'donde desempeñé un rol activo en el diseño e implementación de diversas funcionalidades clave. Además, ' +
        'implementé la arquitectura limpia (Clean Architecture) para estructurar el proyecto, lo que garantizó ' +
        'su mantenibilidad y escalabilidad a largo plazo.',
    },
    {
      title: 'Desarrollo de aplicaciones móviles',
      subtitle: 'EXPERIENCIA EN DESARROLLO DE APLICACIONES MÓVILES',
      content:
        'Durante mi participación en un proyecto real, tuve la oportunidad de trabajar con Xamarin Forms ' +
        '(C#), desarrollando una aplicación móvil que interactuaba directamente con una REST API para la obtención ' +
        'y carga de datos. Mi papel incluyó la implementación de soluciones eficientes para el consumo de la API, ' +
        'así como la gestión del envío de información al servidor de manera efectiva.',
    },
  ];
}
