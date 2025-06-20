import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  iniciarSesion(): void {
    if (this.loginForm.invalid) {
      this.error = 'Revisa los campos marcados.';
      return;
    }

    const { email, password } = this.loginForm.value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find((u: any) =>
      u.email === email && u.password === password
    );

    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      this.router.navigate([
        usuario.email === 'admin@example.com' ? '/admin' : '/perfil'
      ]);
    } else {
      this.error = 'Correo o contraseña incorrectos';
    }
  }

  recuperarPassword(): void {
    this.router.navigate(['/recuperar']);
  }

  registrarse(): void {
    this.router.navigate(['/registro']);
  }
}
