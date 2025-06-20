import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  recuperarForm!: FormGroup;
  enviado: boolean = false;
  error: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.recuperarForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
      // No hay "direccionDespacho" aquí, así que no lo agregamos
    });
  }

  onSubmit(): void {
    if (this.recuperarForm.invalid) {
      this.error = 'Introduce un correo válido.';
      this.enviado = false;
      return;
    }

    this.enviado = true;
    this.error = '';
    this.recuperarForm.reset();
  }
}
