import { Component } from '@angular/core';
import { GmuendeCardViewComponent } from '../../ui/gmuende-card-view/gmuende-card-view.component';
import { CardData } from '../../ui/interfaces/card-data.interface';

@Component({
  selector: 'gmuende-bestellen',
  standalone: true,
  imports: [GmuendeCardViewComponent],
  templateUrl: './gmuende-bestellen.component.html',
  styleUrl: './gmuende-bestellen.component.scss'
})
export class GmuendeBestellenComponent {
  public data: CardData[] = [
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
  ]
}
