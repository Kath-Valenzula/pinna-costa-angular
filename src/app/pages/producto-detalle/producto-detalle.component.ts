import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/productos.service';
import { CartService } from 'src/app/services/cart.service';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto?: Producto;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getById(id).subscribe((prod) => {
      if (prod) {
        this.producto = prod;
      }
    });
  }

  agregarAlCarrito(): void {
    if (this.producto) {
      this.cartService.agregar(this.producto);
      alert(`${this.producto.nombre} fue agregado al carrito.`);
    }
  }
}
