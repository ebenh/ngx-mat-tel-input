import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatTelInputComponent } from './ngx-mat-tel-input.component';

describe('NgxMatTelInputComponent', () => {
  let component: NgxMatTelInputComponent;
  let fixture: ComponentFixture<NgxMatTelInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatTelInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
