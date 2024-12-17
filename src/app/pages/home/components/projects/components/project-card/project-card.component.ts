import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../types';
import { Card, CardComponent, GithubIconComponent } from '@/components';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;

  projectCard?: Card;

  ngOnInit(): void {
    this.projectCard = {
      title: this.project.title,
      subtitle: this.project.summary,
    };
  }

  openModal(event: MouseEvent) {
    const buttonClicked = event.target as HTMLButtonElement;
    const dialog = buttonClicked.parentElement
      ?.previousSibling as HTMLDialogElement;

    dialog.showModal();
  }

  closeModal(event: MouseEvent) {
    const buttonClicked = event.target as HTMLButtonElement;
    const dialog = buttonClicked.parentElement
      ?.parentElement as HTMLDialogElement;
    const sliders = document.getElementsByClassName('slider');

    for (let i = 0; i < sliders.length; i++) {
      sliders[i].scrollLeft = 0;
    }

    dialog.close();
  }
}
