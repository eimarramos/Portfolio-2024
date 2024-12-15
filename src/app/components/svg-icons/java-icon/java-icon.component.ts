import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-java-icon',
  standalone: true,
  imports: [],
  templateUrl: './java-icon.component.html',
  styles: ``,
})
export class JavaIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
