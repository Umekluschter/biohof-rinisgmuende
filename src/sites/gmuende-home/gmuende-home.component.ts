import { Component } from '@angular/core';
import { GmuendeCarouselComponent } from '../../framework/gmuende-carousel/gmuende-carousel.component';

@Component({
  selector: 'gmuende-home',
  standalone: true,
  imports: [GmuendeCarouselComponent],
  templateUrl: './gmuende-home.component.html',
  styleUrl: './gmuende-home.component.scss'
})
export class GmuendeHomeComponent {

}
