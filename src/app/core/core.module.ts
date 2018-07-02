import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [],
    exports: [
        HeaderComponent
    ]
})

export class CoreModule {

}