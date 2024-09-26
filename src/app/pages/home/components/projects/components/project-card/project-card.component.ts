import { Component, Input } from '@angular/core';
import { AppComponent } from '../../../../../../app.component';
import { Project } from '../../types';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project?: Project;
}
