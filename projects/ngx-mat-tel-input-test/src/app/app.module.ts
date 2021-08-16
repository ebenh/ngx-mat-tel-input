import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgxMatTelInputModule} from 'ngx-mat-tel-input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMatTelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
