import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './components/usuarios/registro-usuario/registro-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { RecuperarPasswordComponent } from './components/usuarios/recuperar-password/recuperar-password.component';
import { CreacioneventoComponent } from './components/eventos/creacionevento/creacionevento.component';
import { ResetearpasswordComponent } from './components/usuarios/resetear-password/resetearpassword.component';
import { LoginComponent } from './components/login/login.component';
import { EdicionUsuarioComponent } from './components/usuarios/edicion-usuario/edicion-usuario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'recuperarcontrasena', component: RecuperarPasswordComponent },
  { path: 'resetearcontrasena', component: ResetearpasswordComponent },
  { path: 'crearevento', component: CreacioneventoComponent },
  { path: 'editarusuario', component: EdicionUsuarioComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
