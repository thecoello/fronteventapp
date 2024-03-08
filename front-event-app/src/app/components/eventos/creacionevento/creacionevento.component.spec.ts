import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacioneventoComponent } from './creacionevento.component';

describe('CreacioneventoComponent', () => {
  let component: CreacioneventoComponent;
  let fixture: ComponentFixture<CreacioneventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreacioneventoComponent]
    });
    fixture = TestBed.createComponent(CreacioneventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
