import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productSvc: ProductService) { }
  ngOnInit(): void {
    this.productSvc.getAll().subscribe((data: Producto[]) => {
      this.productos = data;
    });
  }
}
