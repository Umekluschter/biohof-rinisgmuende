import { Component, computed, input } from '@angular/core';
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
  public searchText = input<string>('');

  public cardDataSignal = computed<CardData[]>(() => {
    const cardData = this.cardData();
    const seachText = this.searchText();

    if (seachText === '') {
      return cardData;
    }

    return cardData.filter((card) => card.label.toLowerCase().includes(seachText.toLowerCase()));
  })
}
