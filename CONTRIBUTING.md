# Contributing

## Code of Conduct

Before contributing, please take time to review our code of conduct [here](CODE_OF_CONDUCT.md).

## Developer Cookbook

### Cloning the Git Repository

    $ git clone https://github.com/ebenh/ngx-mat-tel-input ${PROJECT_ROOT}

### Installing Dependencies

    $ cd ${PROJECT_ROOT}
    $ npm install

### Building the Library

    $ cd ${PROJECT_ROOT}
    $ npx ng build

> Note: Add `--watch` to enable automatic incremental builds. The build artifacts will be stored in the `dist/` directory.

### Running the Development Server
    
    $ cd ${PROJECT_ROOT}
    $ npx ng serve

### Installing the Library Locally

    $ cd ${PROJECT_ROOT}
    $ npm run package-for-npm
    $ cd dist/ngx-mat-tel-input/
    $ npm pack

From your target project run:

    $ npm install ${PROJECT_ROOT}/dist/ngx-mat-tel-input/ngx-mat-tel-input-<version>.tgz

### Publishing to npm

    $ cd ${PROJECT_ROOT}/projects/ngx-mat-tel-input/
    $ npm version
    $ npm run package-for-npm
    $ cd ../../ngx-mat-tel-input/
    $ npm publish

### Running Unit Tests

    $ cd ${PROJECT_ROOT}
    $ npx ng test

### Running End-to-End Tests

    $ cd ${PROJECT_ROOT}
    $ npx ng e2e

### Running Arbitrary Angular CLI Commands

To run arbitrary Angular CLI commands, prepend calls to `ng` with `npx`. For example:

    $ cd ${PROJECT_ROOT}
    $ npx ng generate component component-name

> Note: Add `--project ngx-mat-tel-input-test` if you wish to generate a component for the test application.

### Further Help

More information on Angular libraries [here](https://angular.io/guide/creating-libraries).
