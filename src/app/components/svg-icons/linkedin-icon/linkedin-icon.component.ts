import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linkedin-icon',
  standalone: true,
  imports: [],
  templateUrl: './linkedin-icon.component.html',
  styles: ``,
})
export class LinkedinIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
