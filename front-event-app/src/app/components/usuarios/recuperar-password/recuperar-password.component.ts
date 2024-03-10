import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAdmin } from 'src/app/models/users';
import { UserAdminService } from 'src/app/services/user-admin.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.scss']
})
export class RecuperarPasswordComponent {
   
  modelUserAdmin: UserAdmin = new UserAdmin()
  creatingUser: boolean = false
  recupPassOk?: string
  recupPassKo?: string
  inputsValidate?: boolean = false

  constructor(private userAdminService: UserAdminService, private router: Router) { }


  onSubmit(recuperarContrasena: NgForm, event: any): void {

      this.creatingUser = true
      this.modelUserAdmin = recuperarContrasena.value

      if(this.modelUserAdmin.email){
        this.userAdminService.forgotPassword(this.modelUserAdmin.email).subscribe((response) =>{

          console.log(response)
          setTimeout(() => {
              this.creatingUser = false
              this.recupPassKo = ""
              this.recupPassOk = "Email de recuperación enviado"
              this.modelUserAdmin = new UserAdmin()
          }, 1000)
  
        },
        (error)=>{
  
          setTimeout(() => {
            this.creatingUser = false
            this.recupPassOk = ""
            this.recupPassKo = error.error
          }, 1000);
       
        }
        )
      }else{
        this.creatingUser = false
        this.inputsValidate = true
      }
  }
}
