import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService, NewUser } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  loading = false;
  errorMsg = '';
  successMsg = '';

  constructor(private userService: UserService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.loading = true;
    this.errorMsg = '';
    this.successMsg = '';

    const newUser: NewUser = form.value;

    this.userService.createUser(newUser).subscribe({
      next: () => {
        this.successMsg = 'Usuario creado correctamente 🎉';
        form.resetForm();
      },
      error: err => {
        console.error(err);
        this.errorMsg = err.error?.message || 'Hubo un error al crear el usuario.';
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
