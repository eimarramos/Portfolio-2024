import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-netcore-icon',
  standalone: true,
  imports: [],
  templateUrl: './netcore-icon.component.html',
  styles: ``,
})
export class NetcoreIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
