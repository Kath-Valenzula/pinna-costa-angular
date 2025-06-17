import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.email === 'admin@example.com' && this.password === 'admin123') {
      alert('Bienvenido administrador');
      this.router.navigate(['/admin']);
    } else if (this.email === 'usuario@example.com' && this.password === 'usuario123') {
      alert('Bienvenido usuario');
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas. Intenta nuevamente.');
    }
  }
}
