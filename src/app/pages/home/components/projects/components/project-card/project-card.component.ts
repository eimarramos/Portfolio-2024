import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../types';
import { Card, CardComponent } from '../../../../../../components';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;

  project1?: Card;

  ngOnInit(): void {
    this.project1 = {
      title: this.project.title,
      subtitle: this.project.summary,
    };
  }

  openModal(event: MouseEvent) {
    const buttonClicked = event.target as HTMLButtonElement;
    const dialog = buttonClicked.previousSibling as HTMLDialogElement;

    dialog.showModal();
  }

  closeModal(event: MouseEvent) {
    const buttonClicked = event.target as HTMLButtonElement;
    const dialog = buttonClicked.parentElement
      ?.parentElement as HTMLDialogElement;
    const slider = document.querySelector('.slider') as HTMLDivElement;

    slider.scrollLeft = 0;
    dialog.close();
  }
}
