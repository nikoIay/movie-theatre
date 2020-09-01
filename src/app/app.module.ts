import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CartComponent} from './pages/cart/cart.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        ProductListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
