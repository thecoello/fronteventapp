import { Component } from '@angular/core';
import { UserAdmin } from 'src/app/models/users';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  modelUserAdmin: UserAdmin = new UserAdmin();

  constructor() { }

  loginadmin(LoginComponent: NgForm){}
  }

