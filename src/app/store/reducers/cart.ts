import * as actions from '../actions/cart';
import {Order, OrderItem} from '../../models/order';

export interface State {
    order: Order;
}

export const initialState: State = {
    order: []
};

export function reducer(state = initialState, action: actions.CartAction) {
    switch (action.type) {
        case actions.ADD: {
            const order: Order = JSON.parse(JSON.stringify(state.order)); // deep copy of object
            const newOrderItems = [];

            action.payload.forEach((item: OrderItem, i) => {
                const sameCartOrder = order.find((cartItem: OrderItem) => cartItem.product.id === item.product.id);

                if (sameCartOrder) {
                    sameCartOrder.quantity = sameCartOrder.quantity + item.quantity;
                } else {
                    newOrderItems.push(item);
                }
            });

            return {
                ...state,
                order: [...order, ...newOrderItems]
            };
        }

        case actions.CLEAR: {
            return {
                ...state,
                order: [],
            };
        }

        default:
            return state;
    }
}

export const getOrder = (state: State) => state.order;
