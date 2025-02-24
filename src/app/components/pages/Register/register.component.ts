import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class BodyRegisterComponent {
  email: string = '';
  name: string = '';
  password: string = '';

  emailPattern: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'; // Regex para email

  constructor(private http: HttpClient) {}

  onSubmitRegister() {
    const emailRegex = new RegExp(this.emailPattern);
    if (!emailRegex.test(this.email)) {
      alert('E-mail inválido!');
      return;
    }

    console.log('Formulário enviado');

    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.registerUser(user).subscribe();
  }

  registerUser(usuario: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users', usuario);
  }
}
