import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Producto {
  id: number;
  name: string;
  image: string;
  description: string;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usuarios: Usuario[] = [
    { id: 1, name: 'Katherine', email: 'ka.valenzuelam@duocuc.cl', role: 'Usuario' },
    { id: 2, name: 'Miguel',    email: 'm.hernandez@example.com',   role: 'Usuario' },
    { id: 99, name: 'Admin',    email: 'admin@example.com',         role: 'Administrador' }
  ];
  productos: Producto[] = JSON.parse(localStorage.getItem('products') || '[]');

  constructor(private router: Router) {}

   ngOnInit(): void {
    if (sessionStorage.getItem('adminLogged') !== 'true') {
      this.router.navigate(['/admin-login']);
    }
  }

  crearUsuario() {
    this.router.navigate(['/create-user']);
  }

  agregarProducto(p: { name: string; image: string; description: string }) {
    const id = this.productos.length ? Math.max(...this.productos.map(x=>x.id)) + 1 : 1;
    this.productos.push({ id, ...p });
    localStorage.setItem('products', JSON.stringify(this.productos));
  }

  salir(): void {
    this.router.navigate(['/']);
  }
}