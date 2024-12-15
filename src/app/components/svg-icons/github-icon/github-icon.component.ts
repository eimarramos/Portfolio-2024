import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-icon',
  standalone: true,
  imports: [],
  templateUrl: './github-icon.component.html',
  styles: ``,
})
export class GithubIconComponent {
  @Input() width: string = '75px';
  @Input() height: string = '75px';
}
