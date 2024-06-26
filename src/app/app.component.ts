import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent, NavbarComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio-2024';
}
