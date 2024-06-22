import { Component } from '@angular/core';
import { Link, LinkComponent } from '../../../../components';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LinkComponent, NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  links: Link[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/eimarramos',
      src: 'assets/icons/github.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/eimar-ramos-sacari-78524a29a',
      src: 'assets/icons/linkedin.svg',
    },
    {
      name: 'Email',
      url: 'mailto:eimar.ramossacari@gmail.com',
      src: 'assets/icons/email.svg',
    },
    {
      name: 'CV',
      url: 'https://drive.google.com/file/d/1hwEQi53gJC2bZjyzhyClMSA1jCYcbuP9/view?usp=sharing',
      src: 'assets/icons/cv.svg',
    },
  ];

  getNumberArray(n: number): Array<number> {
    return Array(n);
  }
}
