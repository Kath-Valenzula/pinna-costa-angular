import { Component } from '@angular/core';

interface Credenciales {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  usuario: Credenciales = { email: '', password: '' };
  loginExitoso = false;

  iniciarSesion(): void {
    this.loginExitoso = (this.usuario.email === 'admin' && this.usuario.password === '1234');
  }
}
