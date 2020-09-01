import {
    ActionReducerMap,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import * as orderReducers from './cart';
import * as productReducers from './product';

export interface State {
    cart: orderReducers.State;
    products: productReducers.State;
}

export const reducers: ActionReducerMap<State> = {
    cart: orderReducers.reducer,
    products: productReducers.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state: State, action: any): State => {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [logger];
