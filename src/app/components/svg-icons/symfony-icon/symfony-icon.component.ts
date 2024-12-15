import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-symfony-icon',
  standalone: true,
  imports: [],
  templateUrl: './symfony-icon.component.html',
  styles: ``,
})
export class SymfonyIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
