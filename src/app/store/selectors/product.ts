import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as productReducers from '../reducers/product';

export const getProductState = createFeatureSelector<productReducers.State>('product');

export const getProducts = createSelector(
    getProductState,
    productReducers.getProducts
);

export const getNextProductId = createSelector(
    getProductState,
    productReducers.getNextProductId
);

export const getDiscounts = createSelector(
    getProductState,
    productReducers.getDiscounts
);
