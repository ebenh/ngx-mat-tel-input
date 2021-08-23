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


## Publishing

### Library

After building your library with `ng build ngx-mat-tel-input --prod`, go to the dist folder `cd dist/ngx-mat-tel-input`
and run `npm publish`.

### Test application

After building your test project with `ng build ngx-mat-tel-input-test --prod` run `firebase deploy`.

## Running unit tests

Run `ng test ngx-mat-tel-input` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
