import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Producto[] = [];
  itemsChanged = new Subject<Producto[]>();

  agregar(producto: Producto): void {
    this.items.push(producto);
    this.itemsChanged.next([...this.items]);
  }

  obtenerItems(): Producto[] {
    return [...this.items];
  }

  limpiarCarrito(): void {
    this.items = [];
    this.itemsChanged.next([]);
  }
}
