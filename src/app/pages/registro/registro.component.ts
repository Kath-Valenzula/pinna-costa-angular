import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre = '';
  email = '';
  password = '';
  error = '';
  exito = '';

  constructor(private router: Router) {}

  registrar(): void {
    if (!this.nombre || !this.email || !this.password) {
      this.error = 'Todos los campos son obligatorios.';
      this.exito = '';
      return;
    }

    const usuariosGuardados = localStorage.getItem('usuarios');
    const usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

    const existe = usuarios.find((u: any) => u.email === this.email);
    if (existe) {
      this.error = 'Ya existe una cuenta con ese correo.';
      this.exito = '';
      return;
    }

    const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      tipo: 'cliente'
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    this.exito = '¡Registro exitoso! Ahora puedes iniciar sesión.';
    this.error = '';
    this.nombre = '';
    this.email = '';
    this.password = '';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
