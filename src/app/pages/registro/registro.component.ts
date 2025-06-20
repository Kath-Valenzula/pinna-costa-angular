import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuario {
  nombre: string;
  email: string;
  password: string;
  direccionDespacho?: string;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;
  error: string = '';
  mensaje: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre:            ['', Validators.required],
      email:             ['', [Validators.required, Validators.email]],
      password:          ['', Validators.required],
      direccionDespacho: ['']  // campo opcional
    });
  }

  registrar(): void {
    if (this.registroForm.invalid) {
      this.error = 'Revisa los campos obligatorios.';
      this.mensaje = '';
      return;
    }

    const nuevo: Usuario = this.registroForm.value;
    const lista: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');

    if (lista.some(u => u.email === nuevo.email)) {
      this.error = 'El correo ya está registrado.';
      this.mensaje = '';
      return;
    }

    lista.push(nuevo);
    localStorage.setItem('usuarios', JSON.stringify(lista));

    this.mensaje = 'Cuenta creada correctamente.';
    this.error = '';
    this.registroForm.reset();
  }
}
