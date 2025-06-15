<<<<<<< HEAD
import { Component, OnInit }     from '@angular/core';
import { ProductService }        from '../../services/productos.service';
import { Producto }              from '../../models/producto.model';
=======
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';
>>>>>>> ab2f73d (Corrige importaciones y errores de CartService y ProductService)

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];
<<<<<<< HEAD

  constructor(private productSvc: ProductService) {}

  ngOnInit(): void {
    this.productSvc.getAll().subscribe(data => {
=======
  constructor(private productSvc: ProductService) { }
  ngOnInit(): void {
    this.productSvc.getAll().subscribe((data: Producto[]) => {
>>>>>>> ab2f73d (Corrige importaciones y errores de CartService y ProductService)
      this.productos = data;
    });
  }
}
