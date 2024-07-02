import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [],
  template: `
  <section class="showcase bg-cover bg-center bg-no-repeat h-72">
      <div class="h-full flex flex-col justify-center items-center gap-6 z-10 overlay">
        <h2 class="text-4xl font-bold text-white">Find Your Dream Job</h2>
        <form class="flex gap-1">
          <input type="text bg-white" class="px-4 py-2 focus:outline-none" name="keywords" id="keywords" placeholder="Keywords">
          <input type="text" class="px-4 py-2 focus:outline-none" name="location" id="location" placeholder="Location">
          <button class="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 focus:outline-none"><i class="fa fa-search"></i> Search</button>
        </form>
      </div>
</section>
  `,
  styleUrl: './showcase.component.css'
})
export class ShowcaseComponent {

}
