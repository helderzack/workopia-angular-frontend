import { Component } from '@angular/core';

@Component({
  selector: 'app-top-banner',
  standalone: true,
  imports: [],
  template: `
  <section class="bg-blue-900 text-white py-6 flex flex-col gap-2 justify-center items-center">
    <h2 class="text-3xl font-semibold">Unlock Your Career Potential</h2>
    <p class="text-lg">Discover the perfect job opportunity for you.</p>
  </section>
  `,
  styleUrl: './top-banner.component.css'
})
export class TopBannerComponent {

}
