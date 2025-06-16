import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute }         from '@angular/router';
import { ProductService }         from '../../services/productos.service';
import { Producto }               from '../../models/producto.model';
import { CartService }            from '../../services/cart.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto?: Producto;

  constructor(
    private route: ActivatedRoute,
    private productSvc: ProductService,
    private cartSvc: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productSvc.getById(id).subscribe(p => this.producto = p);
  }

  agregarAlCarrito(): void {
    if (this.producto) {
      this.cartSvc.addToCart(this.producto);
      alert(`${this.producto.nombre} añadido al carrito.`);
    }
  }
}
