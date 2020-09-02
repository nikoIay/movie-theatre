import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order, OrderItem, OrderItemTotalSum} from '../../models/order';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducers';
import {getOrder} from '../../store/selectors/cart';
import {Clear} from '../../store/actions/cart';
import {getDiscounts} from '../../store/selectors/product';
import {Subscription} from 'rxjs';
import {Discounts} from '../../models/product';
import {OrderService} from '../../services/order.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
    order: Order = [];
    discounts: Discounts;

    private subscription: Subscription = new Subscription();

    constructor(private store: Store<State>, private orderService: OrderService) {
        const orderSub = store.select(getOrder).subscribe((order: Order) => {
            this.order = order;
        });

        const discountsSub = store.select(getDiscounts).subscribe((discounts: Discounts) => {
            this.discounts = discounts;
        });

        this.subscription.add(orderSub);
        this.subscription.add(discountsSub);
    }

    get totalSums(): OrderItemTotalSum[] {
        return this.orderService.countOrderItemTotalSums(this.order, this.discounts);
    }

    get orderSum(): number {
        return this.orderService.countOrderTotalSum(this.totalSums);
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
