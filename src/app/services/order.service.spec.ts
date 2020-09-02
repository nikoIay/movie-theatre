import {TestBed} from '@angular/core/testing';

import {OrderService} from './order.service';
import {initialState} from '../store/reducers/product';
import {Order, OrderItem} from '../models/order';

describe('OrderService', () => {
    let service: OrderService;
    const order: Order = initialState.products.map((p): OrderItem => ({quantity: 5, product: p}));

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(OrderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('calling countOrderTotalSum', () => {
        const totalSums = service.countOrderItemTotalSums(order, initialState.discounts);
        const result = service.countOrderTotalSum(totalSums);
        expect(result).toEqual(37);
    });
});
