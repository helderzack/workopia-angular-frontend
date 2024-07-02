import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ShowcaseComponent } from '../showcase/showcase.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ShowcaseComponent],
  template: `
  <app-navbar></app-navbar>
  <app-showcase></app-showcase>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
