import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-php-icon',
  standalone: true,
  imports: [],
  templateUrl: './php-icon.component.html',
  styles: ``,
})
export class PhpIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
