import { Component, input } from '@angular/core';
import { CardData } from '../interfaces/card-data.interface';
import { GmuendeCardComponent } from '../gmuende-card/gmuende-card.component';

@Component({
  selector: 'gmuende-card-view',
  standalone: true,
  imports: [GmuendeCardComponent],
  templateUrl: './gmuende-card-view.component.html',
  styleUrl: './gmuende-card-view.component.scss'
})
export class GmuendeCardViewComponent {
  public cardData = input.required<CardData[]>();
}
