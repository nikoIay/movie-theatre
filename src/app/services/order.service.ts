import {Injectable} from '@angular/core';
import {Order, OrderItem, OrderItemTotalSum} from '../models/order';
import {Discounts} from '../models/product';
import {ProductService} from './product.service';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private productService: ProductService) {
    }

    countOrderItemTotalSums(order: Order, discounts: Discounts): OrderItemTotalSum[] {
        return order.map((item: OrderItem) => {
            const hasDiscount = discounts[item.product.id] !== undefined;

            const sum = hasDiscount
                ? this.productService.countDiscountedOrderItemPrice(item, discounts[item.product.id])
                : item.product.price * item.quantity;

            return {
                orderItem: item,
                sum,
                isDiscounted: hasDiscount && item.product.price * item.quantity > sum
            };
        });
    }

    countOrderTotalSum(orderItemSums: OrderItemTotalSum[]): number {
        return orderItemSums.reduce((sum, curr) => sum + curr.sum, 0);
    }
}
