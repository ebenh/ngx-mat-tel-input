# Contributing

## Code of Conduct

Before contributing, please take time to review our code of conduct [here](CODE_OF_CONDUCT.md).

## Developer Cookbook

### Cloning the Git Repository

    $ git clone https://github.com/ebenh/ngx-mat-tel-input/ ${PROJECT_ROOT}

### Installing Dependencies

    $ cd ${PROJECT_ROOT}
    $ npm install

### Building the Library

<pre><code><del>cd ${PROJECT_ROOT}
npx ng build</del></code></pre>

> ~~Note: Add `--watch` to enable automatic incremental builds. The build artifacts will be stored in the `dist/` directory.~~

In order for live reload and breakpoints to work with the Angular library, you need replace the following segment
in `tsconfig.json`:

    "paths": {
      "ngx-mat-tel-input": [
        "dist/ngx-mat-tel-input/ngx-mat-tel-input",
        "dist/ngx-mat-tel-input"
      ]
    }

with this:

    "paths": {
      "ngx-mat-tel-input": [
        "projects/ngx-mat-tel-input/src/public-api.ts"
      ]
    }

### Running the Development Server

    $ cd ${PROJECT_ROOT}
    $ npx ng serve

### Installing the Library Locally

    $ cd ${PROJECT_ROOT}
    $ npm run package-for-npm
    $ cd dist/ngx-mat-tel-input/
    $ npm pack

From your target project the following command. The value of `${VERSION}` should be the library's current semantic version (e.g. `1.0.0`).

    $ npm install ${PROJECT_ROOT}/dist/ngx-mat-tel-input/ngx-mat-tel-input-${VERSION}.tgz

### Publishing to npm

> Note: Before performing these steps `git stash` any changes you do not want to commit.

    $ cd ${PROJECT_ROOT}/projects/ngx-mat-tel-input/
    $ VERSION=$(npm version [major|minor|patch])
    $ git commit -am "Bumping version number" && git push
    $ git tag ${VERSION} && git push --tags
    $ cd ../..
    $ npm run package-for-npm
    $ cd dist/ngx-mat-tel-input/
    $ npm adduser
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
