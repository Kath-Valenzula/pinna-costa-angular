import { Component, OnInit } from '@angular/core';
import { CartService }      from '../../services/cart.service';
import { Producto }         from '../../models/producto.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Producto[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // 1. Obtengo los ítems
    this.cartItems = this.cartService.getCart();
    // 2. Calculo el total
    this.total = this.cartItems.reduce((sum, p) => sum + p.precio, 0);
  }

  clear(): void {
    // Vacío el carrito
    this.cartService.clearCart();
    this.cartItems = [];
    this.total = 0;
  }
}
