import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DetalleUsuarioComponent } from './detalle-usuario.component';

describe('DetalleUsuarioComponent', () => {
  let component: DetalleUsuarioComponent;
  let fixture: ComponentFixture<DetalleUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleUsuarioComponent ],
      imports: [ FormsModule ] // 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call actualizarInformacion method', () => {
    spyOn(component, 'actualizarInformacion');
    const button = fixture.debugElement.nativeElement.querySelector('.btn-primary');
    button.click();
    expect(component.actualizarInformacion).toHaveBeenCalled();
  });

  it('should call eliminarUsuario method', () => {
    spyOn(component, 'eliminarUsuario');
    const button = fixture.debugElement.nativeElement.querySelector('.btn-danger');
    button.click();
    expect(component.eliminarUsuario).toHaveBeenCalled();
  });
});

