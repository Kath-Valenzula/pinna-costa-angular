import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Observable, map } from 'rxjs';
=======
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
>>>>>>> ab2f73d (Corrige importaciones y errores de CartService y ProductService)
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'assets/data/productos.json';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }
<<<<<<< HEAD

  getById(id: number): Observable<Producto | undefined> {
    return this.getAll().pipe(
      map(items => items.find(p => p.id === id))
=======
  getById(id: number): Observable<Producto | undefined> {
    return this.http.get<Producto[]>(this.url).pipe(
      map(list => list.find(p => p.id === id))
>>>>>>> ab2f73d (Corrige importaciones y errores de CartService y ProductService)
    );
  }
}
