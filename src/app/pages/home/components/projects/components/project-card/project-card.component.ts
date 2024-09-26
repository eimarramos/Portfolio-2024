import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AppComponent } from '../../../../../../app.component';
import { Project } from '../../types';
import { Card, CardComponent } from '../../../../../../components';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [AppComponent, CardComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project?: Project;

  project1: Card = {
    title: 'Peritajes Web / App',
    subtitle: 'Desarrollo de una aplicación web',
  };

  openModal(event: MouseEvent) {
    const buttonClicked = event.target as HTMLButtonElement;
    const dialog = buttonClicked.previousSibling as HTMLDialogElement;

    dialog.showModal();
  }

  closeModal(event: MouseEvent) {
    const buttonClicked = event.target as HTMLButtonElement;
    const dialog = buttonClicked.parentElement
      ?.parentElement as HTMLDialogElement;

    dialog.close();
  }
}
