import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class BodyLoginComponent implements OnInit {
  userData: any;
  users: any;
  url: string = 'http://localhost:3000/users';

  //Regex
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  ngOnInit() {
    fetch(this.url)
      .then((res) => res.json())
      .then((json) => {
        this.userData = json;
      });
  }
  user: string = '';
  password: string = '';
  logged: Boolean = false;

  onSubmit() {
    if (!this.emailPattern.test(this.user)) {
      alert('E-mail inválido!');
      return;
    }

    if (!this.passwordPattern.test(this.password)) {
      alert(
        'Senha inválida! A senha deve ter pelo menos 8 caracteres, incluindo letras, números e caracteres especiais.'
      );
      return;
    }

    this.users = Object.values(this.userData);
    this.users.forEach((user: any) => {
      if (this.user == user.email && this.password == user.password) {
        this.logged = true;
        console.log(user.id);
      } else {
        return;
      }
    });

    if (this.logged) {
      alert('Login concluído!');
    } else {
      alert('Usuário ou senha incorretos...');
    }
  }
}
