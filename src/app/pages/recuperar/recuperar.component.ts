import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  email = '';
  enviado = false;
  error = '';

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.error = 'Introduce un correo electrónico válido.';
      return;
    }
    // Aquí iría la lógica real (API, etc.)
    console.log('Enviando enlace a:', this.email);
    this.enviado = true;
    this.error = '';
    form.resetForm();
  }
}
