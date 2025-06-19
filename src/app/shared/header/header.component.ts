import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cantidad: number = 0;
  estaLogueado: boolean = false;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cantidad = this.cartService.obtenerItems().length;
    this.estaLogueado = !!localStorage.getItem('usuario');
  }

  logout() {
    localStorage.removeItem('usuario');
    this.estaLogueado = false;
    this.router.navigate(['/login']);
  }
}
