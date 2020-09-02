import { Action } from '@ngrx/store';
import {Product, ProductDiscount} from '../../models/product';

export const ADD_PRODUCT = '[Product] Add Product';
export const ADD_DISCOUNT = '[Product] Add Discount';

export class AddProduct implements Action {
    readonly type = ADD_PRODUCT;

    constructor(public payload: Product) { }
}

export class AddDiscount implements Action {
    readonly type = ADD_DISCOUNT;

    constructor(public payload: { discount: ProductDiscount, productId: number}) { }
}

export type ProductAction = AddProduct | AddDiscount;
