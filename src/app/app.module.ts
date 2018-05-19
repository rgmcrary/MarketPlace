import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ManagerComponent } from './manager/manager.component';
import { SupervisorComponent } from './supervisor/supervisor.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ManagerComponent,
    SupervisorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
