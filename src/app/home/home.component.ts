import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ShowcaseComponent } from '../showcase/showcase.component';
import { TopBannerComponent } from '../top-banner/top-banner.component';
import { ListingsComponent } from '../listings/listings.component';
import { BottomBannerComponent } from '../bottom-banner/bottom-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ShowcaseComponent,
    TopBannerComponent,
    ListingsComponent,
    BottomBannerComponent
  ],
  template: `
  <app-navbar></app-navbar>
  <app-showcase></app-showcase>
  <app-top-banner></app-top-banner>
  <app-listings></app-listings>
  <button class="text-xl text-center font-semibold w-full mt-4 mb-8 "><i class="fa fa-arrow-alt-circle-right"></i> Show All Jobs</button>
  <app-bottom-banner></app-bottom-banner>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
