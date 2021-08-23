import {Component} from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-mat-tel-input';

  myFormGroup = new FormGroup({
    phone_number: new FormControl({value: '', disabled: false}, [Validators.required,]),
  });

  onSubmit(): void {

  }

  get phoneNumber(): FormControl {
    return this.myFormGroup.get('phone_number') as FormControl;
  }

}
