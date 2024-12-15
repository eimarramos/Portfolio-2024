import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqlite-icon',
  standalone: true,
  imports: [],
  templateUrl: './sqlite-icon.component.html',
  styles: ``,
})
export class SqliteIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
