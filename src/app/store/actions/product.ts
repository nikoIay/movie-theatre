import { Action } from '@ngrx/store';
import {Product} from '../../models/product';

export const ADD = '[Product] Add';

export class Add implements Action {
    readonly type = ADD;

    constructor(public payload: Product) { }
}

export type ProductAction = Add;
