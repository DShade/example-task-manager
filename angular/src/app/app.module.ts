import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import {StoreService} from './services/store/store.service';
import {ToastConnectorService} from './services/toast-connector/toast-connector.service';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StoreService, ToastConnectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
