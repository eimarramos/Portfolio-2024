import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-html-icon',
  standalone: true,
  imports: [],
  templateUrl: './html-icon.component.html',
  styles: ``,
})
export class HtmlIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
