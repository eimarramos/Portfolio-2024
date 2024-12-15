import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-csharp-icon',
  standalone: true,
  imports: [],
  templateUrl: './csharp-icon.component.html',
  styles: ``,
})
export class CsharpIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
