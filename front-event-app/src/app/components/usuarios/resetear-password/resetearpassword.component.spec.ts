import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetearpasswordComponent } from './resetearpassword.component';

describe('ResetearpasswordComponent', () => {
  let component: ResetearpasswordComponent;
  let fixture: ComponentFixture<ResetearpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetearpasswordComponent]
    });
    fixture = TestBed.createComponent(ResetearpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
