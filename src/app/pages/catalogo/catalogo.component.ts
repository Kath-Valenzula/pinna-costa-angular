
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productSvc: ProductService) { }
  ngOnInit(): void {
    this.productSvc.getAll().subscribe((data: Producto[]) => {

      this.productos = data;
    });
  }
}
