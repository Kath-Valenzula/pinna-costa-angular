
import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html'
})
export class CatalogoComponent {
  productos = [
    { id: 1, nombre: 'Producto 1', precio: 1000 },
    { id: 2, nombre: 'Producto 2', precio: 2000 },
    { id: 3, nombre: 'Producto 3', precio: 3000 }
  ];
}
