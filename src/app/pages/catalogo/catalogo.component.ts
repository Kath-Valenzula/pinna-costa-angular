import { Component, OnInit }     from '@angular/core';
import { ProductosService }      from '../../services/productos.service';
import { Producto }              from '../../models/producto.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productosSvc: ProductosService) {}

  ngOnInit(): void {
    this.productosSvc.getAll().subscribe(data => {
      this.productos = data;
    });
  }
}
