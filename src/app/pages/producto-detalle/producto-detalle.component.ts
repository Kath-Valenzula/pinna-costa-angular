<<<<<<< HEAD
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute }         from '@angular/router';
import { ProductService }         from '../../services/productos.service';
import { Producto }               from '../../models/producto.model';
import { CartService }            from '../../services/cart.service';
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/productos.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { Producto } from 'src/app/models/producto.model';
>>>>>>> ab2f73d (Corrige importaciones y errores de CartService y ProductService)

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto?: Producto;

  constructor(
    private route: ActivatedRoute,
<<<<<<< HEAD
    private productSvc: ProductService,
    private cartSvc: CartService
=======
    private productService: ProductService,
    private cartService: CartService
>>>>>>> ab2f73d (Corrige importaciones y errores de CartService y ProductService)
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
<<<<<<< HEAD
    this.productSvc.getById(id).subscribe(p => this.producto = p);
=======
    this.productService.getById(id).subscribe((prod: Producto) => {
      this.producto = prod;
    });
>>>>>>> ab2f73d (Corrige importaciones y errores de CartService y ProductService)
  }

  agregarAlCarrito(): void {
    if (this.producto) {
      this.cartService.agregar(this.producto);
      alert(`${this.producto.nombre} fue agregado al carrito.`);
    }
  }
}
