import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cantidad: number = 0;
  estaAutenticado: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cantidad = this.cartService.obtenerItems().length;

    this.cartService.itemsChanged.subscribe(items => {
      this.cantidad = items.length;
    });

    const usuario = localStorage.getItem('usuario');
    this.estaAutenticado = !!usuario;
  }
}
