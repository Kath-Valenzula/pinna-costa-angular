import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Producto } from 'src/app/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Producto | undefined> {
    return this.http.get<Producto[]>('assets/data/productos.json').pipe(
      map(productos => productos.find(p => p.id === id))
    );
  }

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>('assets/data/productos.json');
  }
}
