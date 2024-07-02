import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  template: `<app-navbar></app-navbar>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
