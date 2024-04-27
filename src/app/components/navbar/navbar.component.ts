import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.header') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('header--background-color');
    } else {
      element.classList.remove('header--background-color');
    }
  }
}
