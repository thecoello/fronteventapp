import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './components/usuarios/registro-usuario/registro-usuario.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'registro',component: RegistroUsuarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
