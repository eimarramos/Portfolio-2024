import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular-icon',
  standalone: true,
  imports: [],
  templateUrl: './angular-icon.component.html',
  styles: ``,
})
export class AngularIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
