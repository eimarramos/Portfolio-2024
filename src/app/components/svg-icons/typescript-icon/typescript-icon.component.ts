import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typescript-icon',
  standalone: true,
  imports: [],
  templateUrl: './typescript-icon.component.html',
  styles: ``,
})
export class TypescriptIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
