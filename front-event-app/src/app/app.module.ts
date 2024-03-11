import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegistroUsuarioComponent } from './components/usuarios/registro-usuario/registro-usuario.component';
import { RecuperarPasswordComponent } from './components/usuarios/recuperar-password/recuperar-password.component';
import { EdicionUsuarioComponent } from './components/usuarios/edicion-usuario/edicion-usuario.component';
import { CreacioneventoComponent } from './components/eventos/creacionevento/creacionevento.component';
import { EventoDetalleComponent } from './components/eventos/evento-detalle/evento-detalle.component';
import { EventoListarComponent } from './components/eventos/evento-listar/evento-listar.component';
import { EliminarUsuarioComponent } from './components/usuarios/eliminar-usuario/eliminar-usuario.component';

import { EventService } from './services/event.service';
import { UserAdminService } from './services/user-admin.service';
import { TicketValidatorComponent } from './components/eventos/ticket-validator/ticket-validator.component';
import { LoginComponent } from './components/login/login.component';
import { ResetearpasswordComponent } from './components/usuarios/resetear-password/resetearpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    RegistroUsuarioComponent,
    RecuperarPasswordComponent,
    ResetearpasswordComponent,
    EdicionUsuarioComponent,
    CreacioneventoComponent,
    EventoDetalleComponent,
    EventoListarComponent,
    EliminarUsuarioComponent,
    TicketValidatorComponent,
    LoginComponent
    
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EventService,
    UserAdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
