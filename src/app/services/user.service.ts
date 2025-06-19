import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAll(): any[] {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
  }

  delete(email: string): void {
    const usuarios = this.getAll();
    const filtrados = usuarios.filter((u: any) => u.email !== email);
    localStorage.setItem('usuarios', JSON.stringify(filtrados));
  }
}
