import { Component, computed, input, output } from '@angular/core';
import { ItemData } from '../../ui/interfaces/item-data.interface';

@Component({
  selector: 'gmuende-card-view',
  standalone: true,
  imports: [],
  templateUrl: './gmuende-card-view.component.html',
  styleUrl: './gmuende-card-view.component.scss'
})
export class GmuendeCardViewComponent {
  public items = input.required<ItemData[]>();
  public searchText = input<string>('');

  public addToCart = output<ItemData>();

  public cardDataSignal = computed<ItemData[]>(() => {
    const items = this.items();
    const searchText = this.searchText();

    if (searchText === '') {
      return items;
    }

    return items.filter((item) => item.label.toLowerCase().includes(searchText.toLowerCase()));
  });
}
