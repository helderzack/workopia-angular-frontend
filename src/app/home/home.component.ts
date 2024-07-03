import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { TopBannerComponent } from '../top-banner/top-banner.component';
import { ListingsComponent } from '../listings/listings.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ShowcaseComponent,
    TopBannerComponent,
    ListingsComponent
  ],
  template: `
  <app-navbar></app-navbar>
  <app-showcase></app-showcase>
  <app-top-banner></app-top-banner>
  <app-listings></app-listings>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
