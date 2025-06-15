import { Component } from '@angular/core';

interface DatosContacto {
  nombre: string;
  correo: string;
  mensaje: string;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {
  datos: DatosContacto = { nombre: '', correo: '', mensaje: '' };

  enviarFormulario(form: any) {
    if (form.valid) {
      alert(`¡Gracias, ${this.datos.nombre}! Mensaje enviado.`);
      form.resetForm();
      this.datos = { nombre: '', correo: '', mensaje: '' };
    }
  }
}