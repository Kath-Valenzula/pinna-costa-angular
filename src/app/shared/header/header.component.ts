import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cantidad: number = 0;
  estaAutenticado: boolean = false;
  nombreUsuario: string = '';

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Mantén el contador del carrito
    this.cartService['items$'].subscribe((items: any[]) => {
      this.cantidad = items.length;
    });

    // Verifica sesión activa
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const datos = JSON.parse(usuario);
      this.estaAutenticado = true;
      this.nombreUsuario = datos.nombre || datos.email;
    }
  }

  /** En función del estado/rol del usuario, navega a la ruta correcta */
  irAPerfil(): void {
    const raw = localStorage.getItem('usuario');
    if (!raw) {
      this.router.navigate(['/login']);
    } else {
      const datos = JSON.parse(raw);
      if (datos.email === 'admin@example.com') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/perfil']);
      }
    }
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuario');
    this.estaAutenticado = false;
    this.nombreUsuario = '';
    this.router.navigate(['/']);
  }
}
