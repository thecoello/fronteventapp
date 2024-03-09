import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../models/users';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.scss']
})
export class EliminarUsuarioComponent {
  user: Usuario = new Usuario('', '', '', '', '');
  message: string = '';

  constructor(private userService: UserService) {}

  updateUser(): void {
    this.userService.updateUser(this.user).subscribe({
      next: (response) => {
        this.message = 'Usuario actualizado con éxito.';
      },
      error: () => {
        this.message = 'Error al actualizar el usuario.';
      }
    });
  }

  deleteUser(): void {
    this.userService.authenticateUser(this.user.email, this.user.password).subscribe({
      next: (response) => {
        if(response.token) {
          this.userService.deleteUser(this.user.email).subscribe({
            next: () => this.message = 'Usuario eliminado con éxito.',
            error: () => this.message = 'Error al eliminar el usuario.'
          });
        } else {
          this.message = 'Email no existe o contraseña errónea.';
        }
      },
      error: () => this.message = 'Error en la autenticación.'
    });
  }
}
