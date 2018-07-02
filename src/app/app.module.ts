import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ManagerComponent } from './manager/manager.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { ManagerEditComponent } from './manager/manager-edit/manager-edit.component';
import { SupervisorEditComponent } from './supervisor/supervisor-edit/supervisor-edit.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { DropdownButtonComponent } from './shared/dropdown-button/dropdown-button.component';
import { ProductsComponent } from './shared/products/products.component';
import { ProductEditComponent } from './shared/products/product-edit/product-edit.component';
import { ProductDetailComponent } from './shared/products/product-detail/product-detail.component';
import { ShoppingCartComponent } from './customer/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './shared/products/product-list/product-list.component';
import { ProductItemComponent } from './shared/products/product-list/product-item/product-item.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        ManagerComponent,
        SupervisorComponent,
        ManagerEditComponent,
        SupervisorEditComponent,
        HeaderComponent,
        HomeComponent,
        DropdownButtonComponent,
        ProductsComponent,
        ProductEditComponent,
        ProductDetailComponent,
        ProductListComponent,
        ShoppingCartComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
