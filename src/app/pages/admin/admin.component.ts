import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usuarios: any[] = [];
  productos: any[] = [];
  nuevoProducto: any = {
    nombre: '',
    imagen: '',
    descripcion: '',
    precio: null
  };

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarProductos();
  }

  cargarUsuarios(): void {
    const data = localStorage.getItem('usuarios');
    this.usuarios = data ? JSON.parse(data) : [];
  }

  cargarProductos(): void {
    const data = localStorage.getItem('productos');
    this.productos = data ? JSON.parse(data) : [];
  }

  crearUsuario(): void {
    alert('Función Crear Usuario no implementada en esta vista.');
  }

  editarUsuario(usuario: any): void {
    alert(`Editar usuario: ${usuario.nombre}`);
  }

  eliminarUsuario(usuario: any): void {
    const confirmacion = confirm(`¿Eliminar a ${usuario.nombre}?`);
    if (confirmacion) {
      this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }
  }

  editarProducto(producto: any): void {
    this.nuevoProducto = { ...producto };
  }

  eliminarProducto(producto: any): void {
    const confirmacion = confirm(`¿Eliminar producto "${producto.nombre}"?`);
    if (confirmacion) {
      this.productos = this.productos.filter(p => p.id !== producto.id);
      localStorage.setItem('productos', JSON.stringify(this.productos));
    }
  }

  guardarProducto(): void {
    if (!this.nuevoProducto.nombre || !this.nuevoProducto.precio) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (this.nuevoProducto.id) {
      // Actualizar producto
      const index = this.productos.findIndex(p => p.id === this.nuevoProducto.id);
      if (index !== -1) {
        this.productos[index] = { ...this.nuevoProducto };
      }
    } else {
      // Agregar nuevo producto
      const nuevoId = this.productos.length > 0 ? Math.max(...this.productos.map(p => p.id)) + 1 : 1;
      this.productos.push({ ...this.nuevoProducto, id: nuevoId });
    }

    localStorage.setItem('productos', JSON.stringify(this.productos));
    this.nuevoProducto = {
      nombre: '',
      imagen: '',
      descripcion: '',
      precio: null
    };
  }
}
