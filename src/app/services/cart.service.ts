import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Producto[] = [];

  /** Devuelve los productos actualmente en el carrito */
  getCart(): Producto[] {
    return this.items;
  }

  /** Añade un producto al carrito */
  addToCart(p: Producto): void {
    this.items.push(p);
  }

  /** Vacía el carrito */
  clearCart(): void {
    this.items = [];
  }
}
