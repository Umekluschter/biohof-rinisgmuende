import { Component, signal } from '@angular/core';
import { GmuendeCardViewComponent } from '../../framework/gmuende-card-view/gmuende-card-view.component';
import { ItemData, ItemWithAmount } from '../../components/interfaces/item-data.interface';
import { GmuendeListViewComponent } from '../../framework/gmuende-list-view/gmuende-list-view.component';
import { convertDataToItemWithAmounts } from '../../components/utils/utils';

type SubPage = 'shop' | 'shopping-cart';

@Component({
  selector: 'gmuende-bestellen',
  standalone: true,
  imports: [GmuendeCardViewComponent, GmuendeListViewComponent],
  templateUrl: './gmuende-bestellen.component.html',
  styleUrl: './gmuende-bestellen.component.scss'
})
export class GmuendeBestellenComponent {
  private itemData: ItemData[] = [
    {
      img: '../../assets/images/fleisch/1714162635934.jpg',
      label: "Fleischkäsel",
      price: 7,
    },
    {
      img: '../../assets/images/fleisch/1714162635934.jpg',
      label: "Rindsbraten",
      price: 7,
    },
    {
      img: '../../assets/images/fleisch/1714162635934.jpg',
      label: "Rindshaxen",
      price: 7,
      info: 'Bei der Haxe handelt es sich um die Unterschenkel des Schweins. Verwendet werden die Vorder- und Hinterbeine.'
    },
    {
      img: '../../assets/images/fleisch/1714162635934.jpg',
      label: "Rindsleber",
      price: 7
    },
    {
      img: '../../assets/images/fleisch/1714162635934.jpg',
      label: "Hackfleisch",
      price: 7
    },
    {
      img: '../../assets/images/fleisch/1714162635934.jpg',
      label: "Geschnetzeltes",
      price: 7,
    },
    {
      img: '../../assets/images/fleisch/1714162635934.jpg',
      label: "Voressen",
      price: 7
    },
    {
      img: '../../assets/images/fleisch/1714162635934.jpg',
      label: "Fleischkäsel",
      price: 7,
    },
    // {
    //   img: '../../assets/images/fleisch/1714162635934.jpg',
    //   label: "Rindsbraten",
    //   price: 7,
    // },
    // {
    //   img: '../../assets/images/fleisch/1714162635934.jpg',
    //   label: "Rindshaxen",
    //   price: 7
    // },
    // {
    //   img: '../../assets/images/fleisch/1714162635934.jpg',
    //   label: "Rindsleber",
    //   price: 7
    // },
    // {
    //   img: '../../assets/images/fleisch/1714162635934.jpg',
    //   label: "Hackfleisch",
    //   price: 7
    // },
    // {
    //   img: '../../assets/images/fleisch/1714162635934.jpg',
    //   label: "Geschnetzeltes",
    //   price: 7,
    // },
    // {
    //   img: '../../assets/images/fleisch/1714162635934.jpg',
    //   label: "Voressen",
    //   price: 7
    // }
  ];

  public items: ItemWithAmount[] = [];

  public constructor() {
    this.items = convertDataToItemWithAmounts(this.itemData);
  }

  public titleText = 'Online Hofladen';
  public searchText = '';
  public shoppingCartItems: ItemWithAmount[] = [];
  public shoppingCartItemAmount = signal<number>(0);
  public currentSubPage: 'shop' | 'shopping-cart' = 'shop';

  public search(event: any): void {
    this.searchText = event.target.value;
  }

  public addItemToCart(item: ItemWithAmount): void {
    const itemInList = this.shoppingCartItems.find((i) => i.label === item.label);

    if (itemInList !== undefined) {
      itemInList.amount += 1;
    } else {
      this.shoppingCartItems.push({ ...item, amount: 1 });
    }

    this.shoppingCartItemAmount.update(v => v += 1);
  }

  public removeItem(item: ItemWithAmount): void {
    const itemInList = this.shoppingCartItems.find((i) => i.label === item.label);

    if (itemInList!.amount > 1) {
      itemInList!.amount -= 1;
    } else {
      this.shoppingCartItems = this.shoppingCartItems.filter((i) => i.label !== item.label);
    }

    this.shoppingCartItemAmount.update(v => v -= 1);
  }

  public showSubPage(subPage: SubPage): void {
    if (subPage === 'shopping-cart' && this.shoppingCartItems.length === 0) {
      return;
    }

    switch (subPage) {
      case 'shop':
        this.titleText = 'Online Hofladen';
        break;
      case 'shopping-cart':
        this.titleText = 'Warenkorb';
        break;
    }
    this.currentSubPage = subPage;
  }
}
