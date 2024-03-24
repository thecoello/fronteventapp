import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAdmin } from 'src/app/models/users';
import { UserAdminService } from 'src/app/services/user-admin.service';
import {AbstractControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent {
  
  modelUserAdmin: UserAdmin = new UserAdmin()
  creatingUser: boolean = false
  registerStatusOk?: string
  registerStatusKo?: string
  inputsValidate?: boolean = false

  constructor(private userAdminService: UserAdminService, private router: Router) { }


  onSubmit(registroUsuario: NgForm, event: any): void {

      this.creatingUser = true
      this.modelUserAdmin = registroUsuario.value

      if(this.modelUserAdmin.nombre && this.modelUserAdmin.apellido && this.modelUserAdmin.email && this.modelUserAdmin.usuario && this.modelUserAdmin.password && this.modelUserAdmin.userTerms){
        this.userAdminService.postUser(this.modelUserAdmin).subscribe((response) =>{

          setTimeout(() => {
              this.creatingUser = false
              this.registerStatusKo = ""
              this.registerStatusOk = "Registro completado"
              this.modelUserAdmin = new UserAdmin()
          }, 1000)
  
        },
        (error)=>{
          console.log(error)
  
          setTimeout(() => {
            this.creatingUser = false
            this.registerStatusOk = ""
            this.registerStatusKo = error.error
          }, 1000);
       
        }
        )
      }else{
        this.creatingUser = false
        this.inputsValidate = true
      }
     
  }
}