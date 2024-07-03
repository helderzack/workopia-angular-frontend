import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-banner',
  standalone: true,
  imports: [],
  template: `
  <section class="container mx-auto my-6">
    <footer class="bg-blue-800 text-white flex justify-between items-center px-4 py-4 rounded">
      <div>
        <h2 class="text-xl font-semibold">Looking to hire?</h2>
        <p class="text-lg mt-2">Post your job listing now and find the perfect candidate.</p>
      </div>
      <a href="#" class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded hover:shadow-md transition duration-300">
        <i class="fa fa-edit"></i> Post a Job
      </a>
    </footer>
  </section>
  `,
  styleUrl: './bottom-banner.component.css'
})
export class BottomBannerComponent {

}
