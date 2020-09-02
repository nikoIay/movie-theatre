import {Component, OnDestroy, OnInit} from '@angular/core';
import {Discounts, Order, OrderItem} from '../../models/order';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducers';
import {getOrder} from '../../store/selectors/cart';
import {Clear} from '../../store/actions/cart';
import {getDiscounts} from '../../store/selectors/product';
import {Subscription} from 'rxjs';

interface TotalOrderItemSum {
    sum: number;
    isDiscounted: boolean;
}

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
    order: Order = [];
    discounts: Discounts;

    private subscription: Subscription = new Subscription();

    constructor(private store: Store<State>) {
        const orderSub = store.select(getOrder).subscribe((order: Order) => {
            this.order = order;
        });

        const discountsSub = store.select(getDiscounts).subscribe((discounts: Discounts) => {
            this.discounts = discounts;
        });

        this.subscription.add(orderSub);
        this.subscription.add(discountsSub);
    }

    get totalSums(): TotalOrderItemSum[] {
        return this.order.map((item: OrderItem) => {
            const hasDiscount = this.discounts[item.product.id] !== undefined;
            const sum = hasDiscount ? this.discounts[item.product.id](item) : item.product.price * item.quantity;

            return {
                sum,
                isDiscounted: hasDiscount && item.product.price * item.quantity > sum
            };
        });
    }

    get orderSum(): number {
        return this.totalSums.reduce((sum, curr) => sum + curr.sum, 0);
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    clear() {
        this.store.dispatch(new Clear());
    }

}
