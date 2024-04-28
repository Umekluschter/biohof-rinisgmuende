import { CardData } from "../interfaces/card-data.interface"

export const convertFleischDataToCardData = (fleischData: any): CardData[] => {
    const cards: CardData[] = [];

    fleischData.forEach((category: any) => {
        category.forEach((item: any) => {
            cards.push(convertItemToCardData(item));
        });
    });

    return cards;
}

const convertItemToCardData = (item: any): CardData => ({
    img: '',
    text: item,
    price: item['Preis'],
})