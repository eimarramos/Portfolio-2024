import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-python-icon',
  standalone: true,
  imports: [],
  templateUrl: './python-icon.component.html',
  styles: ``,
})
export class PythonIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
