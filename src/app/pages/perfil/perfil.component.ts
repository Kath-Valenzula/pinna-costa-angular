import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Usuario {
  nombre: string;
  email: string;
  direccionDespacho?: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfilForm!: FormGroup;
  usuario: Usuario = { nombre: '', email: '', direccionDespacho: '' };
  editando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const raw = localStorage.getItem('usuario');
    if (raw) {
      this.usuario = JSON.parse(raw);
    }
    this.perfilForm = this.fb.group({
      nombre:            [this.usuario.nombre, Validators.required],
      email:             [this.usuario.email, [Validators.required, Validators.email]],
      direccionDespacho: [this.usuario.direccionDespacho || '']
    });
  }

  editar(): void {
    this.editando = true;
  }

  guardarCambios(): void {
    if (this.perfilForm.invalid) return;

    const actualizados: Usuario = this.perfilForm.value;
    localStorage.setItem('usuario', JSON.stringify(actualizados));

    const usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const idx = usuarios.findIndex(u => u.email === this.usuario.email);
    if (idx !== -1) {
      usuarios[idx] = actualizados;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }

    this.usuario = actualizados;
    this.editando = false;
  }

  cancelar(): void {
    this.editando = false;
    this.perfilForm.patchValue(this.usuario);
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}
