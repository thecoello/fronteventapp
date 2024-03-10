import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './components/usuarios/registro-usuario/registro-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { RecuperarPasswordComponent } from './components/usuarios/recuperar-password/recuperar-password.component';
import { CreacioneventoComponent } from './components/eventos/creacionevento/creacionevento.component';
import { EventoDetalleComponent } from './components/eventos/evento-detalle/evento-detalle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'recuperarcontrasena', component: RecuperarPasswordComponent },
  { path: 'crearevento', component: CreacioneventoComponent },
  { path: 'detalleevento/:id', component: EventoDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
