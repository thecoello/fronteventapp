import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Password } from 'src/app/models/users';
import { UserAdminService } from 'src/app/services/user-admin.service';

@Component({
  selector: 'app-resetearpassword',
  templateUrl: './resetearpassword.component.html',
  styleUrls: ['./resetearpassword.component.scss']
})

export class ResetearpasswordComponent implements OnInit {
   
  modelPassword: Password = new Password()
  changinPassword: boolean = false
  recupPassOk?: string
  recupPassKo?: string
  inputsValidate?: boolean = false
  token?: string

  constructor(private userAdminService: UserAdminService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {

    if(this.route.snapshot.queryParamMap.get("token")){
      this.token = this.route.snapshot.queryParamMap.get("token")!
    }else{
      this.router.navigate(['/'])
    }

  }




  onSubmit(recuperarContrasena: NgForm, event: any): void {

      this.changinPassword = true
      this.modelPassword = recuperarContrasena.value

      if(this.modelPassword.password){

        if(this.modelPassword.password == this.modelPassword.repeatPassword){
          this.userAdminService.resetPassword(this.modelPassword.password, this.token).subscribe((response) =>{

            console.log(response)
            setTimeout(() => {
                this.changinPassword = false
                this.recupPassKo = ""
                this.recupPassOk = "Contraseña cambiada"
                this.modelPassword = new Password()
            }, 1000)
    
          },
          (error)=>{
    
            setTimeout(() => {
              this.changinPassword = false
              this.recupPassOk = ""
              this.recupPassKo = error.error
            }, 1000);
         
          }
          )
        }
       
      }else{
        this.changinPassword = false
        this.inputsValidate = true
      }
  }
}
