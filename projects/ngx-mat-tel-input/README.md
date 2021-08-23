# NgxMatTelInput

Angular Material component for inputting telephone numbers.

Click [here](https://ngx-mat-tel-input.web.app/) to see a demo.

## Install

Install the package using npm:

    npm install ngx-mat-tel-input

Import the module into your `app.module.ts`:

    import { NgxMatTelInputModule } from 'ngx-mat-tel-input';

    @NgModule({
      ...
      imports: [
        ...,
        NgxMatTelInputModule,
        ...
      ],
      ...
    })

Add the following to your `angular.json` file:

    {
        ...
        "assets": [
            ...,
            {
                "glob": "**/*",
                "input": "./node_modules/ngx-mat-tel-input/assets",
                "output": "./assets/flags"
            }
        ].
        ...
    }

## Usage

### Template

    <mat-form-field appearance="outline">
      <mat-label>Phone Number</mat-label>
      <lib-ngx-mat-tel-input formControlName="phoneNumber" [defaultCountry]="'GB'"></lib-ngx-mat-tel-input>
      <mat-error *ngIf="phoneNumber.hasError('required')">
        This field is <strong>required</strong>
      </mat-error>
      <mat-error *ngIf="phoneNumber.hasError('phoneNumber')">
        Phone number is <strong>invalid</strong>
      </mat-error>
    </mat-form-field>

### Component

    import {Component} from '@angular/core';
    
    import {FormGroup, FormControl, Validators} from '@angular/forms';
    
    @Component({
      selector: 'my-component',
      templateUrl: './my-component.component.html',
      styleUrls: ['./my-component.component.css']
    })
    export class MyComponent { 
      myFormGroup = new FormGroup({
        phoneNumber: new FormControl({value: '', disabled: false}, [Validators.required,]),
      });
    
      onSubmit(): void {
    
      }
    
      get phoneNumber(): FormControl {
        return this.myFormGroup.get('phoneNumber') as FormControl;
      }
    
    }
