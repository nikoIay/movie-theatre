import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as productReducers from '../reducers/product';

export const getProductState = createFeatureSelector<productReducers.State>('products');

export const getProducts = createSelector(
    getProductState,
    productReducers.getProducts
);

export const getDiscounts = createSelector(
    getProductState,
    productReducers.getDiscounts
);
