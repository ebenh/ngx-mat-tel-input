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
