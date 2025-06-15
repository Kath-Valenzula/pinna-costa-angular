import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NewUser {
  nombre: string;
  email: string;
  pwd1: string;
  pwd2: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://tu-api.com'; // ← tu URL de backend

  constructor(private http: HttpClient) {}

  /** Crea un nuevo usuario en el backend */
  createUser(user: NewUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  /** (Opcional) Autenticación, obtiene token o info de usuario */
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
}
