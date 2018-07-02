import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductEditComponent,
        ProductDetailComponent,
        ProductItemComponent,
        ProductListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})

export class ProductsModule {

}