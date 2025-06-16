import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { HttpClientModule }       from '@angular/common/http';

import { AppRoutingModule }       from './app-routing.module';
import { SharedModule }           from './shared/shared.module';

import { AppComponent }           from './app.component';
import { HomeComponent }          from './pages/home/home.component';
import { CatalogoComponent }      from './pages/catalogo/catalogo.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { CartComponent }          from './pages/cart/cart.component';
import { LoginComponent }         from './pages/login/login.component';
import { RegistroComponent }      from './pages/registro/registro.component';
import { RecuperarComponent }     from './pages/recuperar/recuperar.component';
import { PerfilComponent }        from './pages/perfil/perfil.component';
import { ContactoComponent }      from './pages/contacto/contacto.component';
import { AdminLoginComponent }    from './pages/admin-login/admin-login.component';
import { AdminComponent }         from './pages/admin/admin.component';
import { CreateUserComponent }    from './pages/create-user/create-user.component';
import { AcercaComponent }        from './pages/acerca/acerca.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    ProductoDetalleComponent,
    CartComponent,
    LoginComponent,
    RegistroComponent,
    RecuperarComponent,
    PerfilComponent,
    ContactoComponent,
    AdminLoginComponent,
    AdminComponent,
    CreateUserComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
