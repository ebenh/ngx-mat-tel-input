# NgxMatTelInput

Angular Material component for inputting telephone nunbers.

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

## Code scaffolding

Run `ng generate component component-name --project ngx-mat-tel-input` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-mat-tel-input`.
> Note: Don't forget to add `--project ngx-mat-tel-input` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-mat-tel-input` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

### Library

After building your library with `ng build ngx-mat-tel-input --prod`, go to the dist folder `cd dist/ngx-mat-tel-input` and run `npm publish`.

### Test application

After building your test project with `ng build ngx-mat-tel-input-test --prod` run `firebase deploy`.

## Running unit tests

Run `ng test ngx-mat-tel-input` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
