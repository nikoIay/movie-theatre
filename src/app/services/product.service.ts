import {Injectable} from '@angular/core';
import {OrderItem} from '../models/order';
import {ProductDiscount} from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor() {
    }

    countDiscountedOrderItemPrice(item: OrderItem, discount: ProductDiscount): number {
        const discountPackSize = discount.from;
        const pricePerPack = discount.to * item.product.price;
        const numOfDiscountedPacks = Math.floor(item.quantity / discountPackSize);
        const numOfUndiscountProducts = item.quantity % discountPackSize;

        return pricePerPack * numOfDiscountedPacks + item.product.price * numOfUndiscountProducts;
    }
}
