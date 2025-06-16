import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Producto[] = [];

  agregar(producto: Producto): void {
    this.items.push(producto);
  }

  obtenerItems(): Producto[] {
    return this.items;
  }

  limpiarCarrito(): void {
    this.items = [];
  }
}