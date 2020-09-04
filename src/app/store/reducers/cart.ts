import * as actions from '../actions/cart';
import {Order, OrderItem} from '../../models/order';
import {getStateFromLocalStorage, saveStateToLocalStorage} from '../../services/local-storage';

export interface State {
    order: Order;
}

export const initialState: State = {
    order: []
};

const LOCAL_STORAGE_KEY = 'cartState';

function saveCartState(state: object): object {
    return saveStateToLocalStorage(LOCAL_STORAGE_KEY, state);
}

function getInitState() {
     return getStateFromLocalStorage(LOCAL_STORAGE_KEY, initialState);
}

export function reducer(state, action: actions.CartAction) {
    const normalizedState = state ? state : getInitState();

    switch (action.type) {
        case actions.ADD: {
            const order: Order = JSON.parse(JSON.stringify(normalizedState.order)); // deep copy of object
            const newOrderItems = [];

            action.payload.forEach((item: OrderItem, i) => {
                const sameCartOrder = order.find((cartItem: OrderItem) => cartItem.product.id === item.product.id);

                if (sameCartOrder) {
                    sameCartOrder.quantity = sameCartOrder.quantity + item.quantity;
                } else {
                    newOrderItems.push(item);
                }
            });

            return saveCartState({
                ...normalizedState,
                order: [...order, ...newOrderItems]
            });
        }

        case actions.CLEAR: {
            return saveCartState({
                ...normalizedState,
                order: [],
            });
        }

        default:
            return normalizedState;
    }
}

export const getOrder = (state: State) => state.order;
