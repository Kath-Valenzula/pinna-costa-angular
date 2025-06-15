import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}
  onSubmit(): void {
    // Aquí iría la validación real con backend
    if (this.username === 'admin' && this.password === 'TuContraseña') {
      sessionStorage.setItem('adminLogged', 'true');
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos.';
    }
  }
}
