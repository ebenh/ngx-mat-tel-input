# NgxMatTelInput

Angular Material component for inputting telephone numbers.

Click [here](https://ngx-mat-tel-input.web.app/) to see a demo.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
> Note: Add `--project ngx-mat-tel-input-test` if you wish to generate a component for the test application. 

## Build

Run `ng build` to build the library. The build artifacts will be stored in the `dist/` directory.
> Note: Add `--watch` to enable automatic incremental builds when file changes are detected.

## Publishing

### Library

Before building the library, increment its version number using the [npm version](https://docs.npmjs.com/cli/v7/commands/npm-version) command.

Build the library with `ng build --prod`, then navigate to the `dist/ngx-mat-tel-input` directory and run `npm publish`.

### Test application

Build the test project with `ng build ngx-mat-tel-input-test --prod` then run `firebase deploy`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

More information on creating Angular libraries [here](https://angular.io/guide/creating-libraries).
