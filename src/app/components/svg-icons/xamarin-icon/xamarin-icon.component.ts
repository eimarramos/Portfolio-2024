import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xamarin-icon',
  standalone: true,
  imports: [],
  templateUrl: './xamarin-icon.component.html',
  styles: ``,
})
export class XamarinIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
