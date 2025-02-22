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
  ngOnInit() {
    fetch(this.url)
      .then((res) => res.json())
      .then((json) => {
        this.userData = json;
      });
  }
  user: String = '';
  password: String = '';
  logged: Boolean = false;
  onSubmit() {
    this.users = Object.values(this.userData);
    this.users.forEach((user: any) => {
      if (this.user == user.email && this.password == user.password) {
        this.logged = true;
        console.log(user.id);
      } else {
        return;
      }
    });
    if (this.logged == true) {
      alert('Login concluído!');
    } else {
      alert('Usuário ou senha incorretos...');
    }
  }
}
