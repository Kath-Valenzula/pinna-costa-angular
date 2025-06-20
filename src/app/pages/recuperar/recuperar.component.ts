import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  recuperarForm!: FormGroup;
  enviado = false;
  error = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.recuperarForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      direccionDespacho: [''],
      fechaNacimiento:   ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.recuperarForm.invalid) {
      this.error = 'Revisa los campos marcados.';
      this.enviado = false;
      return;
    }
    this.enviado = true;
    this.error = '';
    this.recuperarForm.reset();
  }

  limpiar(): void {
    this.recuperarForm.reset();
    this.error = '';
    this.enviado = false;
  }
}
