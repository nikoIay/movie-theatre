import { Action } from '@ngrx/store';
import {Order} from '../../models/order';

export const ADD = '[Cart] Add';
export const CLEAR = '[Cart] Clear';

export class Add implements Action {
    readonly type = ADD;

    constructor(public payload: Order) { }
}

export class Clear implements Action {
    readonly type = CLEAR;

    constructor() { }
}

export type CartAction = Add | Clear;
