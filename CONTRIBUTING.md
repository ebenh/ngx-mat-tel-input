# Contributing

## Code of Conduct

Before contributing, please take time to review our contributor code of conduct [here](CODE_OF_CONDUCT.md).

## Developer Cookbook

### Clone Git Repository

    $ git clone https://github.com/ebenh/ngx-mat-tel-input ngx-mat-tel-input 

### Install Dependencies

    $ cd ngx-mat-tel-input
    $ npm install

### Run Development Server

    $ npm run start

### Build Library

    $ npm run build

The build artifacts will be stored in the `dist/` directory. Add `--watch` to enable automatic incremental builds.

### Publish to npm

    $ npm version
    $ npm run package-for-npm
    $ cd dist/ngx-mat-tel-input
    $ npm publish

### Run Unit Tests

    $ npm run test

### Run End-to-End Tests

    $ npm run e2e

### Further Help

More information on Angular libraries [here](https://angular.io/guide/creating-libraries).
