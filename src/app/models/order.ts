import {Product} from './product';

export interface OrderItem {
    product: Product;
    quantity: number;
}

export type Order = OrderItem[];

export interface OrderItemTotalSum {
    orderItem: OrderItem;
    sum: number;
    isDiscounted: boolean;
}
