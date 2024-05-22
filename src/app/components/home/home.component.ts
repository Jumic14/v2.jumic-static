import { Component } from '@angular/core';
import { animateHome } from '../../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [animateHome],
})
export class HomeComponent {}
