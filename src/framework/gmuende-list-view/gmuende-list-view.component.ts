import { Component, computed, input, output } from '@angular/core';
import { ItemData } from '../../ui/interfaces/item-data.interface';

interface ItemWithAmount extends ItemData {
  amount: number;
}

@Component({
  selector: 'gmuende-list-view',
  standalone: true,
  imports: [],
  templateUrl: './gmuende-list-view.component.html',
  styleUrl: './gmuende-list-view.component.scss'
})
export class GmuendeListViewComponent {
  public items = input.required<ItemData[]>();

  public removeItem = output<ItemData>();

  public itemsWithAmounts = computed<ItemWithAmount[]>(() => {
    const items = this.items();
    const amounts: {
      [key: string]: number,
    } = {};

    items.forEach((i) => amounts[i.label] = (amounts[i.label] || 0) + 1);

    return items.map<ItemWithAmount>(({ img, label, price, info }) => ({
      img: img,
      label: label,
      price: price * amounts[label] || 1,
      info: info,
      amount: amounts[label]
    })).reduce<ItemWithAmount[]>((acc, curr) => JSON.stringify(acc).includes(JSON.stringify(curr)) ? acc : [...acc, curr], []);
  });

  public totalCost = computed<number>(() => {
    return this.itemsWithAmounts().map((item) => item.price).reduce((acc, curr) => acc += curr, 0);
  });

  public emitRemoveItem({ img, label, price, info }: ItemWithAmount): void {
    this.removeItem.emit({
      img,
      label,
      price,
      info
    });
  }
}