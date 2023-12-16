import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFrmComponent } from './register-frm.component';

describe('RegisterFrmComponent', () => {
  let component: RegisterFrmComponent;
  let fixture: ComponentFixture<RegisterFrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFrmComponent]
    });
    fixture = TestBed.createComponent(RegisterFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
