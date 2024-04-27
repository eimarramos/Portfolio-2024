import { Component } from '@angular/core';
import { LinkComponent } from '../../../../components';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LinkComponent, NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  getNumberArray(n: number): Array<number> {
    return Array(n);
  }
}
