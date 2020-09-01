import * as actions from '../actions/cart';
import {Order} from '../../models/order';

export interface State {
    order: Order;
}

export const initialState: State = {
    order: []
};

export function reducer(state = initialState, action: actions.CartAction) {
    switch (action.type) {
        case actions.ADD: {
            return {
                ...state,
                order: [...action.payload],
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
