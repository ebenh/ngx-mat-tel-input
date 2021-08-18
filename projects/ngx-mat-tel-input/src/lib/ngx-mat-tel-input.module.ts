import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {ReactiveFormsModule} from '@angular/forms';

import {NgxMatTelInputComponent} from './ngx-mat-tel-input.component';

@NgModule({
  declarations: [NgxMatTelInputComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
  ],
  exports: [NgxMatTelInputComponent]
})
export class NgxMatTelInputModule {
}
