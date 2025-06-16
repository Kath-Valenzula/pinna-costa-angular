import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Producto[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.obtenerItems();
    this.total = this.cartItems.reduce((sum, item) => sum + item.precio, 0);
  }

  clear(): void {
    this.cartService.limpiarCarrito();
    this.cartItems = [];
    this.total = 0;
  }
}
