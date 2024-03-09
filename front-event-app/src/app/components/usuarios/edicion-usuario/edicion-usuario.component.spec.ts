import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionUsuarioComponent } from './edicion-usuario.component';

describe('EdicionUsuarioComponent', () => {
  let component: EdicionUsuarioComponent;
  let fixture: ComponentFixture<EdicionUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicionUsuarioComponent]
    });
    fixture = TestBed.createComponent(EdicionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
