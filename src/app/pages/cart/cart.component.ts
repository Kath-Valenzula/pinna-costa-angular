import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Producto[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.obtenerItems();
  }

  limpiarCarrito(): void {
    this.cartService.limpiarCarrito();
    this.items = [];
  }

  obtenerTotal(): number {
    return this.items.reduce((total, item) => total + item.precio, 0);
  }
}
