import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  iniciarSesion(): void {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find((u: any) =>
      u.email === this.email && u.password === this.password
    );

    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      if (usuario.email === 'admin@example.com') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/perfil']);
      }
    } else {
      this.error = 'Correo o contraseña incorrectos';
    }
  }

  recuperarPassword(): void {
    this.router.navigate(['/recuperar']);
  }

  registrarse(): void {
    this.router.navigate(['/registro']);
  }
}
