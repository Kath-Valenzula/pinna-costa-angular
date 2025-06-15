import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre = '';
  email = '';
  pwd1 = '';
  pwd2 = '';
  registroError = '';

  onSubmit(form: NgForm) {
    if (form.invalid || this.pwd1 !== this.pwd2) {
      this.registroError = this.pwd1 !== this.pwd2
        ? 'Las contraseñas no coinciden.'
        : 'Por favor completa todos los campos correctamente.';
      return;
    }
    console.log('Nuevo usuario', { nombre: this.nombre, email: this.email });
    this.registroError = '';
    form.resetForm();
  }
}

