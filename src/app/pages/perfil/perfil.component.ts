import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent {
  name = '';
  email = '';
  phone = '';
  currentPwd = '';
  newPwd1 = '';
  newPwd2 = '';

  actualizar() {
    if (this.newPwd1 !== this.newPwd2) {
      alert('Las contraseñas no coinciden');
      return;
    }
    alert('Perfil actualizado correctamente.');
  }
}
