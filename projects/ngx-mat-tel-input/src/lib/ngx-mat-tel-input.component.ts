import {
  Component,
  OnInit,
  AfterViewInit,
  DoCheck,
  OnDestroy,
  Input,
  Host,
  ViewChild,
  Optional,
  Self,
  ElementRef,
  HostBinding,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  ValidatorFn,
  ValidationErrors,
  FormGroupDirective,
  NgForm,
  ControlContainer,
  NgControl,
  ControlValueAccessor,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import {FocusMonitor} from '@angular/cdk/a11y';

import {Observable, Subject, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import countries, {Country, Countries} from 'world-countries';
import {PhoneNumberUtil, PhoneNumberFormat, PhoneNumberType} from 'google-libphonenumber';

const phoneNumberValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const inputCountry = control.get('country').value as Country;
  const inputPhoneNumber = control.get('phoneNumber').value as string;

  control.get('phoneNumberE164Format').setValue(inputPhoneNumber, {onlySelf: true});

  if (inputPhoneNumber === '') {
    return null;
  }

  try {
    const phoneNumberUtil = PhoneNumberUtil.getInstance();

    const phoneNumber = phoneNumberUtil.parse(inputPhoneNumber, inputCountry.cca2);

    const regionCode = phoneNumberUtil.getRegionCodeForNumber(phoneNumber);

    if (regionCode && regionCode !== inputCountry.cca2) {
      const found = countries.find((el: Country): boolean => el.cca2 === regionCode);
      if (found) {
        control.get('country').setValue(found, {onlySelf: true});
      }
    }

    const isValidNumber = phoneNumberUtil.isValidNumber(phoneNumber);

    if (isValidNumber) {
      const formattedPhoneNumber = phoneNumberUtil.format(phoneNumber, PhoneNumberFormat.E164);
      control.get('phoneNumberE164Format').setValue(formattedPhoneNumber, {onlySelf: true});
    }

    return isValidNumber ? null : {phoneNumber: true};

  } catch (e) {

    if (e instanceof Error && (
      e.message !== 'The string supplied did not seem to be a phone number' &&
      e.message !== 'The string supplied is too short to be a phone number' &&
      e.message !== 'Invalid country calling code' &&
      e.message !== 'Phone number too short after IDD')) {
      throw e; // unexpected error
    }

    return {phoneNumber: true};

  }

  // unreachable

};

class PhoneNumberErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const formHasPhoneNumberError = form.getError('phoneNumber');
    const isSubmitted = form && form.submitted;

    return !!(control && (control.invalid || formHasPhoneNumberError) && (control.touched || isSubmitted));
  }
}

@Component({
  selector: 'lib-ngx-mat-tel-input',
  templateUrl: './ngx-mat-tel-input.component.html',
  styleUrls: ['./ngx-mat-tel-input.component.scss'],
  providers: [
    {provide: MatFormFieldControl, useExisting: NgxMatTelInputComponent}
  ],
})
export class NgxMatTelInputComponent implements OnInit,
  AfterViewInit,
  DoCheck,
  OnDestroy,
  MatFormFieldControl<string>,
  ControlValueAccessor {

  static nextId = 0;

  private subscription: Subscription = new Subscription();

  /**
   * MatFormFieldControl properties
   */

  stateChanges = new Subject<void>();
  id = `ngx-mat-tel-input-${NgxMatTelInputComponent.nextId++}`;
  placeholder: string;
  focused = false;
  errorState = false;
  controlType = 'ngx-mat-tel-input';
  // autofilled?: boolean;

  @HostBinding('attr.aria-describedby') describedBy = '';

  get value(): string {
    return this.formGroup.get('phoneNumberE164Format').value;
  }

  set value(value: string) {
    this.formGroup.get('phoneNumber').setValue(value);
  }

  get empty(): boolean {
    return !this.formGroup.get('phoneNumber').value;
  }

  get shouldLabelFloat(): boolean {
    // return this.focused || !this.empty;
    return true;
  }

  get required(): boolean {
    return this.elementRef.nativeElement.hasAttribute('required');
  }

  get disabled(): boolean {
    return this.formGroup.get('phoneNumber').disabled || this.formGroup.get('country').disabled;
  }

  /**
   * ControlValueAccessor properties
   */

  onTouched: () => void;

  /**
   * NgxMatTelInputComponent properties and methods
   */

  isTouched = false;

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  @Input() defaultCountry = 'US';

  formGroup = new FormGroup({
    countryFilter: new FormControl({value: '', disabled: false}),
    country: new FormControl({value: '', disabled: false}),
    phoneNumber: new FormControl({value: '', disabled: false}),
    phoneNumberE164Format: new FormControl(''),
  }, [phoneNumberValidator]);

  phoneNumberErrorStateMatcher = new PhoneNumberErrorStateMatcher();

  filteredCountries: Observable<Countries>;

  private static getExampleNumber(country: Country): string {
    const phoneNumberUtil = PhoneNumberUtil.getInstance();
    const exampleNumber = phoneNumberUtil.getExampleNumberForType(country.cca2, PhoneNumberType.MOBILE);
    const exampleNumberString = phoneNumberUtil.format(exampleNumber, PhoneNumberFormat.NATIONAL);
    return `eg. ${exampleNumberString}`;
  }

  constructor(private controlContainer: ControlContainer,
              @Host() private parentFormGroupDirective: FormGroupDirective,
              private focusMonitor: FocusMonitor,
              private elementRef: ElementRef<HTMLElement>,
              @Optional() @Self() public ngControl: NgControl) {

    // Monitor our component's root DOM element for focus state changes
    this.subscription.add(
      focusMonitor.monitor(elementRef.nativeElement, true).subscribe(origin => {
        this.focused = !!origin;
        this.stateChanges.next();
      })
    );

    // Replace the provider from above with this.
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }

  }

  ngOnInit(): void {
    // Set the default country
    const defaultCountry = countries.find((el: Country): boolean => el.cca2 === this.defaultCountry);

    this.formGroup.get('country').setValue(defaultCountry);

    this.placeholder = NgxMatTelInputComponent.getExampleNumber(defaultCountry);

    // Create a filtered list of countries based on the user's input
    this.filteredCountries = this.formGroup.get('countryFilter').valueChanges
      .pipe(
        startWith(''),
        map((input: string): Countries => this.filter(input))
      );

    this.subscription.add(
      this.formGroup.get('phoneNumber').valueChanges.subscribe(() => this.stateChanges.next())
    );
    this.subscription.add(
      this.formGroup.get('country').valueChanges.subscribe(() => this.stateChanges.next())
    );
  }

  private filter(value: string): Countries {
    const filterValue = value.toLowerCase();

    return countries.filter((country: Country): boolean => {
      return (
        country.name.common.toLowerCase().includes(filterValue) ||
        country.name.official.toLowerCase().includes(filterValue)
      );
    });
  }

  onSelectionChange(selection: Country): void {
    this.placeholder = NgxMatTelInputComponent.getExampleNumber(selection);
    this.formGroup.get('phoneNumber').updateValueAndValidity();
  }

  get country(): FormControl {
    return this.formGroup.get('country') as FormControl;
  }

  onBlur() {
    if (!this.isTouched) {
      this.isTouched = true;
      this.onTouched();
    }
  }

  /**
   * AfterViewInit methods
   */

  ngAfterViewInit(): void {
    this.subscription.add(
      this.parentFormGroupDirective.ngSubmit.subscribe(e => {
        this.formGroupDirective.onSubmit(e);
        // this.stateChanges.next();
      })
    );
  }

  /**
   * DoCheck methods
   */

  ngDoCheck(): void {
    if (this.ngControl) {
      if (this.formGroup.hasError('phoneNumber')) {
        this.ngControl.control.setErrors({phoneNumber: true});
      }

      const isTouched = this.formGroup.get('phoneNumber').touched;

      let isSubmitted = false;
      if (this.formGroupDirective) {
        isSubmitted = this.formGroupDirective.submitted;
      }

      this.errorState = (this.ngControl.invalid || this.formGroup.invalid) && (isTouched || isSubmitted);
      this.stateChanges.next();
    }
  }

  /**
   * OnDestroy methods
   */

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef.nativeElement);
    this.stateChanges.complete();
    this.subscription.unsubscribe();
  }

  /**
   * MatFormFieldControl methods
   */

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent): void {
  }

  /**
   * ControlValueAccessor methods
   */

  writeValue(obj: any): void {
    this.formGroup.get('phoneNumber').setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.subscription.add(
      this.formGroup.get('phoneNumberE164Format').valueChanges.subscribe(x => fn(x))
    );
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }
}
