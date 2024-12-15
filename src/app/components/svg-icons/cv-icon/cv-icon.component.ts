import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-icon',
  standalone: true,
  imports: [],
  templateUrl: './cv-icon.component.html',
  styles: ``,
})
export class CvIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
