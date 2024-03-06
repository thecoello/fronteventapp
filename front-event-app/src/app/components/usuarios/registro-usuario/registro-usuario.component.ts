import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAdmin } from 'src/app/models/users';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent {
  

  modelUserAdmin: UserAdmin = new UserAdmin()


  onSubmit(registroUsuario: NgForm): void {

  

  }


}