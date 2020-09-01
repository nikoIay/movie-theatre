import {Product} from './product';

export interface OrderItem {
    product: Product;
    quantity: number;
}

export type Order = OrderItem[];

export type ProductListPriceDiscount = (orderItem: OrderItem) => number;

export interface Discounts {
    [productId: number]: ProductListPriceDiscount;
}
