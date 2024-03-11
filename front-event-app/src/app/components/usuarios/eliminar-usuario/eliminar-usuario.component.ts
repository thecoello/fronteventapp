import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAdminService } from 'src/app/services/user-admin.service';
import { UserAdmin } from 'src/app/models/users';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.scss']
})
export class EliminarUsuarioComponent implements OnInit {
  user: UserAdmin = new UserAdmin();
  message: string = '';

  constructor(private userAdminService: UserAdminService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteUser(): void {
    this.userAdminService.deleteUser(this.user.id).subscribe({
      next: (response) => {
        this.message = 'Usuario eliminado con éxito.';
      },
      error: (error) => {
        console.error('Error al eliminar el usuario:', error);
        this.message = 'Error al eliminar el usuario.';
      }
    });
  }
}
