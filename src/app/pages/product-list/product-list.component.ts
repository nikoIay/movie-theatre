import {Component, OnInit} from '@angular/core';
import {State} from '../../store/reducers';
import {getProducts} from '../../store/selectors/product';
import {Store} from '@ngrx/store';
import {Product} from '../../models/product';
import {map} from 'rxjs/operators';
import {Order, OrderItem} from '../../models/order';
import {Add} from '../../store/actions/cart';

interface ProductPosition {
    product: Product;
    quantity: number;
}

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    productPositions: ProductPosition[];
    isSaved = false;

    constructor(private store: Store<State>) {
        store.select(getProducts)
            .pipe(
                map((products: Product[]): ProductPosition[] => {
                    return products.map(product => ({ product, quantity: 0 }));
                })
            )
            .subscribe((positions: ProductPosition[]) => {
                this.productPositions = positions;
            });
    }

    ngOnInit(): void {
    }

    onQuantityChanged(value: number, position: ProductPosition) {
        position.quantity = value;
    }

    isAddingDisabled(): boolean {
        return this.productPositions.every(p => p.quantity === 0);
    }

    addToCart() {
        const order: Order = this.productPositions
            .filter(position => position.quantity > 0)
            .map(position => ({...position} as OrderItem));

        this.store.dispatch(new Add(order));
        this.isSaved = true;
    }
}
