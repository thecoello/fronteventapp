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


  loginadmin(LoginComponent: NgForm){}
  }

