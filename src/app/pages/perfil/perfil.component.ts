import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: any = {};
  editando: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const raw = localStorage.getItem('usuario');
    if (raw) {
      this.usuario = JSON.parse(raw);
    }
  }

  guardarCambios(): void {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const idx = usuarios.findIndex((u: any) => u.email === this.usuario.email);
    if (idx !== -1) {
      usuarios[idx] = this.usuario;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
    this.editando = false;
  }

  editar(): void {
    this.editando = true;
  }

  cancelar(): void {
    this.editando = false;
    this.ngOnInit();
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}
