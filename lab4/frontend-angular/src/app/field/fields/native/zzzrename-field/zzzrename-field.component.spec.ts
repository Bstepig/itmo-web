import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZzzrenameFieldComponent } from './checkbox-field.component';

describe('ZzzrenameFieldComponent', () => {
  let component: ZzzrenameFieldComponent;
  let fixture: ComponentFixture<ZzzrenameFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZzzrenameFieldComponent]
    });
    fixture = TestBed.createComponent(ZzzrenameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
