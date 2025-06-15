import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private url = '/assets/data/productos.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  getById(id: number): Observable<Producto | undefined> {
    return this.getAll().pipe(
      map(items => items.find(p => p.id === id))
    );
  }
}
