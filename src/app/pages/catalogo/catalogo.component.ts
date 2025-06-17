import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductService } from 'src/app/services/productos.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productoService.getAll().subscribe((lista) => {
      this.productos = lista;
    });
  }

  agregarAlCarrito(producto: Producto): void {
    this.cartService.agregar(producto);
    alert(`${producto.nombre} fue agregado al carrito 🛒`);
  }
}
