import { Component } from '@angular/core';
import { UserAdmin } from 'src/app/models/users';
import { NgForm } from '@angular/forms';
import { UserAdminService } from 'src/app/services/user-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  modelUserAdmin: UserAdmin = new UserAdmin()
  inputsValidate?: boolean = false

  constructor(private userAdminService: UserAdminService, private router: Router) { }


  onSubmit(login: NgForm, event: any): void {

  if(this.modelUserAdmin.email && this.modelUserAdmin.password){

    //SI TIENE TODO PASSWORD Y CONTRASEÑA AQUÍ VA EL CÓDIGO DEL SERVICIO PARA HACER EL LOGIN

  }else{
    this.inputsValidate = true
  }
}
}

