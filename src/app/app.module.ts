import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CartComponent} from './pages/cart/cart.component';
import {ProductListComponent} from './pages/product-list/product-list.component';

import { reducers, metaReducers } from './store/reducers';

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        ProductListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, { metaReducers })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
