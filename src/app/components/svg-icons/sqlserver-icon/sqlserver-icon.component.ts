import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqlserver-icon',
  standalone: true,
  imports: [],
  templateUrl: './sqlserver-icon.component.html',
  styles: ``,
})
export class SqlserverIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
