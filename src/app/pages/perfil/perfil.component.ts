import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

interface Usuario {
  nombre: string;
  email: string;
  direccionDespacho?: string;
  fechaNacimiento?: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfilForm!: FormGroup;
  usuario: Usuario = { nombre: '', email: '', direccionDespacho: '', fechaNacimiento: '' };
  editando = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    const raw = localStorage.getItem('usuario');
    if (raw) this.usuario = JSON.parse(raw);
    this.perfilForm = this.fb.group({
      nombre:            [this.usuario.nombre, Validators.required],
      email:             [this.usuario.email, [Validators.required, Validators.email]],
      direccionDespacho: [this.usuario.direccionDespacho || ''],
      fechaNacimiento:   [this.usuario.fechaNacimiento || '', Validators.required]
    });
  }

  editar(): void {
    this.editando = true;
  }

  guardarCambios(): void {
    if (this.perfilForm.invalid) return;
    const actual: Usuario = this.perfilForm.value;
    localStorage.setItem('usuario', JSON.stringify(actual));
    const list: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const idx = list.findIndex(u => u.email === this.usuario.email);
    if (idx !== -1) { list[idx] = actual; localStorage.setItem('usuarios', JSON.stringify(list)); }
    this.usuario = actual;
    this.editando = false;
  }

  cancelar(): void {
    this.editando = false;
    this.perfilForm.patchValue(this.usuario);
  }

  limpiar(): void {
    this.perfilForm.reset({
      nombre: this.usuario.nombre,
      email: this.usuario.email,
      direccionDespacho: this.usuario.direccionDespacho,
      fechaNacimiento: this.usuario.fechaNacimiento
    });
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}
