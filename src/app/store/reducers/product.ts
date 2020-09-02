import * as actions from '../actions/product';
import {Discounts, Product} from '../../models/product';

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
        2: {from: 5, to: 3}
    }
};

export function reducer(state = initialState, action: actions.ProductAction) {
    switch (action.type) {
        case actions.ADD_PRODUCT: {
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        }

        case actions.ADD_DISCOUNT: {
            const discounts = {...state.discounts};
            discounts[action.payload.productId] = action.payload.discount;

            return {
                ...state,
                discounts
            };
        }

        default:
            return state;
    }
}

export const getProducts = (state: State) => state.products;
export const getNextProductId = (state: State) => state.products[state.products.length - 1].id + 1;
export const getDiscounts = (state: State) => state.discounts;
