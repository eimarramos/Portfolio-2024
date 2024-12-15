import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-javascript-icon',
  standalone: true,
  imports: [],
  templateUrl: './javascript-icon.component.html',
  styles: ``,
})
export class JavascriptIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
