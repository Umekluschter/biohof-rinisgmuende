import { ItemData, ItemWithAmount } from "../interfaces/item-data.interface";

export const convertDataToItemWithAmounts = (data: ItemData[]): ItemWithAmount[] => data.map((item) => ({ ...item, amount: 0 }));