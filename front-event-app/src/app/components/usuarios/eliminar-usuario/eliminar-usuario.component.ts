import { Component } from '@angular/core';
import { UserAdminService } from 'src/app/services/user-admin.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.scss']
})
export class EliminarUsuarioComponent {
  email: string = '';
  confirmEmail: string = '';

  constructor(private userAdminService: UserAdminService) { }

  eliminarUsuario(): void {
    if(this.email !== this.confirmEmail) {
      alert('Los correos electrónicos no coinciden.');
      return;
    }
    
    this.userAdminService.deleteUserAndEvents(this.email, this.confirmEmail).subscribe({
      next: (response) => alert('Usuario y eventos relacionados eliminados exitosamente.'),
      error: (error) => alert('Error al eliminar el usuario y sus eventos. ' + error)
    });
  }
}
