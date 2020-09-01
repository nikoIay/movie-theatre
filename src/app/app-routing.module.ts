import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CartComponent} from './pages/cart/cart.component';
import {ProductListComponent} from './pages/product-list/product-list.component';

const routes: Routes = [
    {path: 'product-list', component: ProductListComponent},
    {path: 'cart', component: CartComponent},
    {path: '**', redirectTo: 'product-list'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
