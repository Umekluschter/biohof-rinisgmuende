import { Component, computed, input, output, signal } from '@angular/core';
import { ItemData, ItemWithAmount } from '../../components/interfaces/item-data.interface';

@Component({
  selector: 'gmuende-list-view',
  standalone: true,
  imports: [],
  templateUrl: './gmuende-list-view.component.html',
  styleUrl: './gmuende-list-view.component.scss'
})
export class GmuendeListViewComponent {
  public items = input.required<ItemWithAmount[]>();

  public addItem = output<ItemWithAmount>();
  public removeItem = output<ItemWithAmount>();

  // public itemsWithAmounts = computed<ItemWithAmount[]>(() => {
  //   const items = this.itemsSignal();
  //   console.log('itemsWithAmounts', items);

  //   const amounts: {
  //     [key: string]: number,
  //   } = {};

  //   items.forEach((i) => amounts[i.label] = (amounts[i.label] || 0) + 1);

  //   console.log(amounts);


  //   return items.map<ItemWithAmount>(({ img, label, price, info }) => ({
  //     img: img,
  //     label: label,
  //     price: price * amounts[label] || 1,
  //     info: info,
  //     amount: amounts[label]
  //   })).reduce<ItemWithAmount[]>((acc, curr) => JSON.stringify(acc).includes(JSON.stringify(curr)) ? acc : [...acc, curr], []);
  // });

  public totalCost = computed<number>(() => {
    return this.items().map((item) => item.price).reduce((acc, curr) => acc += curr, 0);
  });

  // private itemsSignal = signal<ItemWithAmount[]>([]);

  public changeAmount(item: ItemWithAmount, delta: number): void {
    // item.amount += delta;

    if (delta > 0) {
      this.emitAddItem(item);
      return;
    }

    this.emitRemoveItem(item);
  }

  public emitAddItem(item: ItemWithAmount): void {
    // this.itemsSignal.update(v => [...v, item]);
    this.addItem.emit(item);
  }

  public emitRemoveItem(item: ItemWithAmount): void {
    // this.itemsSignal.update(v => v.filter(i => JSON.stringify(i) !== JSON.stringify(item)));
    this.removeItem.emit(item);
  }
}