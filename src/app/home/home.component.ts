import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { TopBannerComponent } from '../top-banner/top-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ShowcaseComponent, TopBannerComponent],
  template: `
  <app-navbar></app-navbar>
  <app-showcase></app-showcase>
  <app-top-banner></app-top-banner>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
