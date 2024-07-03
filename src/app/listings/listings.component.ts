import { Component } from '@angular/core';
import { JobListingComponent } from '../job-listing/job-listing.component';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [JobListingComponent],
  template: `
  <section class="px-32">
    <h3 class="text-3xl font-bold border-2 border-gray-300 mt-8 p-2 text-center">Recent Jobs</h3>
    <div class="grid grid-cols-3 gap-2 mt-4">
      <app-job-listing></app-job-listing>
      <app-job-listing></app-job-listing>
      <app-job-listing></app-job-listing>
      <app-job-listing></app-job-listing>
    </div>
  </section>
  `,
  styleUrl: './listings.component.css'
})
export class ListingsComponent {

}
