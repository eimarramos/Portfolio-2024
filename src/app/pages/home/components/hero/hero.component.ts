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
      alt: 'GitHub',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/eimar-ramos-sacari-78524a29a',
      src: 'assets/icons/linkedin.svg',
      alt: 'LinkedIn',
    },
    {
      name: 'Email',
      url: 'mailto:eimar.ramossacari@gmail.com',
      src: 'assets/icons/email.svg',
      alt: 'Email',
    },
    {
      name: 'CV',
      url: 'https://drive.google.com/file/d/1hHc9MpOOwl2NuIwxPTzE1iXNyS2lIQSF/view?usp=sharing',
      src: 'assets/icons/cv.svg',
      alt: 'CV',
    },
  ];

  getNumberArray(n: number): Array<number> {
    return Array(n);
  }
}
