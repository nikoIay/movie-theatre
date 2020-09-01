import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as orderReducers from '../reducers/cart';

export const getOrderState = createFeatureSelector<orderReducers.State>('cart');

export const getOrder = createSelector(
    getOrderState,
    orderReducers.getOrder
);
