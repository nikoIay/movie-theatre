import {TestBed} from '@angular/core/testing';

import {ProductService} from './product.service';
import {Product} from '../models/product';

describe('ProductService', () => {
    let service: ProductService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProductService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('calling countDiscountedOrderItemPrice', () => {
        const product: Product = {
            name: 'Product',
            price: 2,
            id: 1
        };

        const result = service.countDiscountedOrderItemPrice(
            {product, quantity: 5},
            {from: 2, to: 1}
            );

        expect(result).toEqual(6);
    });
});
