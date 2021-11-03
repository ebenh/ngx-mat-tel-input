# NgxMatTelInput

**[Angular Material](https://material.angular.io/)** component for inputting telephone numbers.

* **Material design**
* **Validates** and **formats** phone numbers (via Google's [libphonenumber](https://github.com/google/libphonenumber))
* **250** countries and dependent areas
* Flags **optimized** for low resolution
* **Streamlined** UX

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

## Basic Usage

### Template

    <mat-form-field appearance="outline">
      <mat-label>Phone Number</mat-label>
      <lib-ngx-mat-tel-input formControlName="phoneNumber"></lib-ngx-mat-tel-input>
      <mat-error *ngIf="phoneNumber.hasError('required')">
        This field is <strong>required</strong>
      </mat-error>
      <mat-error *ngIf="phoneNumber.hasError('format')">
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

# Errors

## `format`

This error is triggered when the user's input does not form a valid phone number.

      <mat-error *ngIf="phoneNumber.hasError('format')">
        Phone number is <strong>invalid</strong>
      </mat-error>

## `country`

This error is triggered when the user enters a phone number belonging to a country or dependent area that either isn't
in `countryWhiteList`, or is in `countryBlacklist`.

      <mat-error *ngIf="phoneNumber.hasError('country')">
        US numbers <strong>only</strong>
      </mat-error>

## Options

| Option           | Type       | Optional? | Example                                 | Default     | Description                                                                                                                                                                              |
|------------------|------------|-----------|-----------------------------------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| defaultCountry   | `string`   | Yes       | `[defaultCountry]="'US'"`               | `undefined` | The country to be selected by default in the country picker. If omitted, the default will be the first country in English alphabetical order (Afghanistan).                              |
| countryWhitelist | `string[]` | Yes       | `[countryWhitelist]="['US', 'CA']"`     | `undefined` | List of countries to **include** in the country picker. If omitted all countries are displayed.                                                                                          |
| countryBlacklist | `string[]` | Yes       | `[countryBlacklist]="['DE','PA','NZ']"` | `undefined` | List of countries to **exclude** from the country picker. If omitted all countries are displayed.                                                                                        |
| format           | `number`   | Yes       | `[format]="0"`                          | `0`         | The format of the phone number written to form control named "phoneNumber".<ul><li>0 - E164 *(Recommended)*</li><li>1 - INTERNATIONAL</li><li>2 - NATIONAL</li><li>3 - RFC3966</li></ul> |

---
**NOTE**

Countries are represented by their [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) (e.g. "
FR" for France). Codes should consist of capital letters **only** with no extraneous whitespace.

---
