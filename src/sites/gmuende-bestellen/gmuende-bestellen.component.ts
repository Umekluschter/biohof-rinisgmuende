import { Component } from '@angular/core';
import { GmuendeCardViewComponent } from '../../framework/gmuende-card-view/gmuende-card-view.component';
import { ItemData } from '../../ui/interfaces/item-data.interface';
import { GmuendeListViewComponent } from '../../framework/gmuende-list-view/gmuende-list-view.component';

type SubPage = 'shop' | 'shopping-cart';

@Component({
  selector: 'gmuende-bestellen',
  standalone: true,
  imports: [GmuendeCardViewComponent, GmuendeListViewComponent],
  templateUrl: './gmuende-bestellen.component.html',
  styleUrl: './gmuende-bestellen.component.scss'
})
export class GmuendeBestellenComponent {
  public items: ItemData[] = [
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

  public titleText = 'Online Hofladen';
  public searchText = '';
  public shoppingCartItems: ItemData[] = [];
  public currentSubPage: 'shop' | 'shopping-cart' = 'shop';

  public search(event: any): void {
    this.searchText = event.target.value;
  }

  public addItemToCart(item: ItemData): void {
    this.shoppingCartItems.push(item);
  }

  public removeItem(item: ItemData): void {
    this.shoppingCartItems = this.shoppingCartItems.filter((i) => JSON.stringify(i) !== JSON.stringify(item));
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
