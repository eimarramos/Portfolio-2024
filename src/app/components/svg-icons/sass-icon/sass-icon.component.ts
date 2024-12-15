import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sass-icon',
  standalone: true,
  imports: [],
  templateUrl: './sass-icon.component.html',
  styles: ``,
})
export class SassIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
