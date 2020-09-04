import * as actions from '../actions/product';
import {Discounts, Product} from '../../models/product';
import {getStateFromLocalStorage, saveStateToLocalStorage} from '../../services/local-storage';

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

const LOCAL_STORAGE_KEY = 'productState';

function saveProductState(state: object): object {
    return saveStateToLocalStorage(LOCAL_STORAGE_KEY, state);
}

function getInitState() {
    return getStateFromLocalStorage(LOCAL_STORAGE_KEY, initialState);
}

export function reducer(state, action: actions.ProductAction) {
    const normalizedState = state ? state : getInitState();

    switch (action.type) {
        case actions.ADD_PRODUCT: {
            return saveProductState({
                ...normalizedState,
                products: [...normalizedState.products, action.payload],
            });
        }

        case actions.ADD_DISCOUNT: {
            const discounts = {...normalizedState.discounts};
            discounts[action.payload.productId] = action.payload.discount;

            return saveProductState({
                ...normalizedState,
                discounts
            });
        }

        default:
            return normalizedState;
    }
}

export const getProducts = (state: State) => state.products;
export const getNextProductId = (state: State) => state.products[state.products.length - 1].id + 1;
export const getDiscounts = (state: State) => state.discounts;
