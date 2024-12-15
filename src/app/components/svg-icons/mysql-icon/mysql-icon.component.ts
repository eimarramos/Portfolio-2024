import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mysql-icon',
  standalone: true,
  imports: [],
  templateUrl: './mysql-icon.component.html',
  styles: ``,
})
export class MysqlIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
