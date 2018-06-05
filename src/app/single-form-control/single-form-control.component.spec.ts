import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFormControlComponent } from './single-form-control.component';

describe('SingleFormControlComponent', () => {
  let component: SingleFormControlComponent;
  let fixture: ComponentFixture<SingleFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFormControlComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
