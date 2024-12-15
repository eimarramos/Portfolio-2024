import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-react-icon',
  standalone: true,
  imports: [],
  templateUrl: './react-icon.component.html',
  styles: ``,
})
export class ReactIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
