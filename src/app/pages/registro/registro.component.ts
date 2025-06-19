import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  error: string = '';
  mensaje: string = '';

  constructor(private router: Router) {}

  registrar(): void {
    if (!this.nombre || !this.email || !this.password) {
      this.error = 'Por favor completa todos los campos.';
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const yaExiste = usuarios.some((u: any) => u.email === this.email);
    if (yaExiste) {
      this.error = 'Ya existe un usuario con este correo.';
      return;
    }

    const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    this.mensaje = 'Usuario registrado con éxito. Redirigiendo al inicio de sesión...';
    this.error = '';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
