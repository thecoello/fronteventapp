import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoEdicionComponent } from './evento-edicion.component';

describe('EventoEdicionComponent', () => {
  let component: EventoEdicionComponent;
  let fixture: ComponentFixture<EventoEdicionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoEdicionComponent]
    });
    fixture = TestBed.createComponent(EventoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
