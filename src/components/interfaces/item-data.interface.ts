export interface ItemData {
    img: string;
    label: string;
    price: number;
    info?: string;
}

export interface ItemWithAmount extends ItemData {
    amount: number;
}