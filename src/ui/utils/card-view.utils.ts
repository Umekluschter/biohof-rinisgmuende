import { ItemData } from "../interfaces/item-data.interface"

export const convertFleischDataToCardData = (fleischData: any): ItemData[] => {
    const cards: ItemData[] = [];

    fleischData.forEach((category: any) => {
        category.forEach((item: any) => {
            cards.push(convertItemToCardData(item));
        });
    });

    return cards;
}

const convertItemToCardData = (item: any): ItemData => ({
    img: '',
    label: item,
    price: item['Preis'],
})