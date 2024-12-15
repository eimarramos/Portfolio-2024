import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-css-icon',
  standalone: true,
  imports: [],
  templateUrl: './css-icon.component.html',
  styles: ``,
})
export class CssIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
