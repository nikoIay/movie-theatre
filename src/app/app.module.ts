import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CartComponent} from './pages/cart/cart.component';
import {ProductListComponent} from './pages/product-list/product-list.component';
import { reducers, metaReducers } from './store/reducers';
import { NumberSelectorComponent } from './components/number-selector/number-selector.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        ProductListComponent,
        NumberSelectorComponent,
        AddProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, { metaReducers })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
