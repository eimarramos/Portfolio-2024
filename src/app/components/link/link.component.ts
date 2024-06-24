import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

export type Link = {
  name: string;
  url: string;
  src: string;
  alt: string;
};
@Component({
  selector: 'app-link',
  standalone: true,
  imports: [NgIf],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
})
export class LinkComponent {
  @Input() link?: Link;
}
