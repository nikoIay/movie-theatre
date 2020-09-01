import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../../models/order';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducers';
import {getOrder} from '../../store/selectors/cart';
import {Clear} from '../../store/actions/cart';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    order$: Observable<Order>;

    constructor(private store: Store<State>) {
        this.order$ = store.select(getOrder);
    }

    ngOnInit(): void {
    }

    clear() {
        this.store.dispatch(new Clear());
    }

}
