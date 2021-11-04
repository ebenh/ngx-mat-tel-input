# Contributing

## Code of Conduct

Before contributing, please take time to review our code of conduct [here](CODE_OF_CONDUCT.md).

## Developer Cookbook

### Cloning the Git Repository

    $ git clone https://github.com/ebenh/ngx-mat-tel-input ngx-mat-tel-input 

### Installing Dependencies

    $ cd ngx-mat-tel-input
    $ npm install

### Building the Library

    $ npx ng build

> Note: Add `--watch` to enable automatic incremental builds. The build artifacts will be stored in the `dist/` directory.

### Running Development Server

    $ npx ng serve

### Publishing to npm

    $ npm version
    $ npm run package-for-npm
    $ cd dist/ngx-mat-tel-input
    $ npm publish

### Running Unit Tests

    $ npx ng test

### Running End-to-End Tests

    $ npx ng e2e

### Running Arbitrary Angular CLI Commands

To run arbitrary Angular CLI commands, prepend calls to `ng` with `ngx`. For example:

    $ ngx ng generate component component-name

> Note: Add `--project ngx-mat-tel-input-test` if you wish to generate a component for the test application.

### Further Help

More information on Angular libraries [here](https://angular.io/guide/creating-libraries).
