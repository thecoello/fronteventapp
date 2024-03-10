import { Component } from '@angular/core';
import { UserAdmin } from 'src/app/models/users';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent {
  modelUserAdmin: UserAdmin = new UserAdmin(); 

  constructor() { }

  actualizarInformacion() {
    console.log('Información actualizada:', this.modelUserAdmin);
  }

  eliminarUsuario() {
    console.log('Usuario eliminado:', this.modelUserAdmin);
  }
}