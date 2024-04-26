import { Component } from '@angular/core';
import { LinkComponent } from '../../../../components';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
