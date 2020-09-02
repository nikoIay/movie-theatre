import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CartComponent} from './pages/cart/cart.component';
import {ProductListComponent} from './pages/product-list/product-list.component';
import {AddProductComponent} from './pages/add-product/add-product.component';

const routes: Routes = [
    {path: 'product-list', component: ProductListComponent},
    {path: 'add-product', component: AddProductComponent},
    {path: 'cart', component: CartComponent},
    {path: '**', redirectTo: 'product-list'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
