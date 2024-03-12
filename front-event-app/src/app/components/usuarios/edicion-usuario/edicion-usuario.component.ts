import { Component, OnInit } from '@angular/core';
import { UserAdmin } from 'src/app/models/users';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAdminService } from 'src/app/services/user-admin.service';
import {AbstractControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-edicion-usuario',
  templateUrl: './edicion-usuario.component.html',
  styleUrls: ['./edicion-usuario.component.scss']
})
export class EdicionUsuarioComponent implements OnInit {

  modelUserAdmin: UserAdmin = new UserAdmin()
  editUser: boolean = false
  editStatusOk?: string
  editStatusKo?: string
  inputsValidate?: boolean = false

  constructor(private userAdminService: UserAdminService, private router: Router) { }
  ngOnInit(): void {
    this.userAdminService.getUser(1).subscribe((response) =>{
   
    this.modelUserAdmin = response
    console.log(this.modelUserAdmin)
    },
    (error)=>{
      console.log(error)

      setTimeout(() => {
        this.editUser = false
        this.editStatusOk = ""
        this.editStatusKo = error.error
      }, 1000);})
  }

  onSubmit(edicionUsuario: NgForm, event: any): void {

      this.editUser = true
      this.modelUserAdmin = edicionUsuario.value

      if(this.modelUserAdmin.nombre && this.modelUserAdmin.apellido && this.modelUserAdmin.email && this.modelUserAdmin.usuario && this.modelUserAdmin.password){
        this.userAdminService.putUser(1,this.modelUserAdmin).subscribe((response) =>{

          setTimeout(() => {
              this.editUser = false
              this.editStatusKo = ""
              this.editStatusOk = "Usuario actualizado"
              this.modelUserAdmin = new UserAdmin()
          }, 1000)
  
        },
        (error)=>{
          console.log(error)
  
          setTimeout(() => {
            this.editUser = false
            this.editStatusOk = ""
            this.editStatusKo = error.error
          }, 1000);
       
        }
        )
      }else{
        this.editUser = false
        this.inputsValidate = true
      }
    
     
  }
}
