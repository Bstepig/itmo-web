import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFieldComponent } from './AutoFieldComponent';

describe('AutoFieldComponent', () => {
  let component: AutoFieldComponent;
  let fixture: ComponentFixture<AutoFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoFieldComponent]
    });
    fixture = TestBed.createComponent(AutoFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
