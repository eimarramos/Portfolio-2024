import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email-icon',
  standalone: true,
  imports: [],
  templateUrl: './email-icon.component.html',
  styles: ``,
})
export class EmailIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
