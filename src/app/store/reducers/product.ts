import * as actions from '../actions/product';
import {Product} from '../../models/product';
import {Discounts, OrderItem} from '../../models/order';

export interface State {
    products: Product[];
    discounts: Discounts;
}

export const initialState: State = {
    products: [{
        id: 1,
        price: 3,
        name: 'Popcorn'
    }, {
        id: 2,
        price: 4,
        name: 'Snickers'
    }, {
        id: 3,
        price: 2,
        name: 'Soda'
    }],
    discounts: {
        2: (item: OrderItem) => {
            const discountPackSize = 5;
            const pricePerPack = 3 * item.product.price;
            const numOfDiscountedPacks = Math.floor(item.quantity / discountPackSize);
            const numOfUndiscountProducts = item.quantity % discountPackSize;

            return pricePerPack * numOfDiscountedPacks + item.product.price * numOfUndiscountProducts;
        }
    }
};

export function reducer(state = initialState, action: actions.Add) {
    switch (action.type) {
        case actions.ADD: {
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        }

        default:
            return state;
    }
}

export const getProducts = (state: State) => state.products;
export const getNextProductId = (state: State) => state.products[state.products.length - 1].id + 1;
export const getDiscounts = (state: State) => state.discounts;
