import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'assets/data/productos.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getById(id: number): Observable<Producto | undefined> {
    return this.getAll().pipe(
      map(productos => productos.find(p => p.id === id))
    );
  }
}
