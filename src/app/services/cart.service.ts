import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Producto[] = [];

  constructor() {
    const datos = localStorage.getItem('carrito');
    this.items = datos ? JSON.parse(datos) : [];
  }

  agregar(producto: Producto): void {
    this.items.push(producto);
    this.guardar();
  }

  obtenerItems(): Producto[] {
    return this.items;
  }

  limpiarCarrito(): void {
    this.items = [];
    this.guardar();
  }

  get cantidad$(): number {
    return this.items.length;
  }

  private guardar(): void {
    localStorage.setItem('carrito', JSON.stringify(this.items));
  }
}
