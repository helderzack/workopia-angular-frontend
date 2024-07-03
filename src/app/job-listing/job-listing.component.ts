import { Component } from '@angular/core';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [],
  template: `
  <div class="rounded ps-4 pe-2 py-4 shadow-lg">
    <h2 class="text-xl font-semibold">Software Engineer</h2>
    <p class="text-lg text-gray-700 break-normal mt-2">We are seeking a skilled software engineer to develop high-quality software solutions.</p>
    <div class="ml-4 my-8 text-base flex flex-col gap-2">
      <p><strong>Salary:</strong> $80,000</p>
      <p><strong>Location:</strong> New York</p>
      <p><strong>Tags:</strong> Development, Coding</p>
    </div>
    <button class="rounded text-indigo-800 font-semibold bg-slate-200 text-center w-full py-2 hover:bg-slate-300">Details</button>
  </div>
  `,
  styleUrl: './job-listing.component.css'
})
export class JobListingComponent {

}
