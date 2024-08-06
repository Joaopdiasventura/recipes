import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  email: string = '';
  password: string = '';

  validate() {
    if (this.email != 'jojo@gmail.com') {
      alert('Email Incorreto');
      return;
    }
    if (this.password != '123') {
      alert('Senha Incorreta');
      return;
    }
    alert('Login bem-sucedido!');
    this.router.navigate(['/recipes']);
  }
}
