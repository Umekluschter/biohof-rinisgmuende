import { Component, input } from '@angular/core';
import { CardData } from '../interfaces/card-data.interface';

@Component({
  selector: 'gmuende-card-view',
  standalone: true,
  imports: [],
  templateUrl: './gmuende-card-view.component.html',
  styleUrl: './gmuende-card-view.component.scss'
})
export class GmuendeCardViewComponent {
  public cardData = input.required<CardData[]>();
}
