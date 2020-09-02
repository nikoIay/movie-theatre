import {
    ActionReducerMap,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import * as cartReducers from './cart';
import * as productReducers from './product';

export interface State {
    cart: cartReducers.State;
    product: productReducers.State;
}

export const reducers: ActionReducerMap<State> = {
    cart: cartReducers.reducer,
    product: productReducers.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state: State, action: any): State => {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const initialState: State = {
    cart: cartReducers.initialState,
    product: productReducers.initialState
};
