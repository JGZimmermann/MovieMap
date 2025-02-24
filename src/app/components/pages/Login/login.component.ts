import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class BodyLoginComponent implements OnInit {
  constructor(private router: Router) {}
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
  onSubmit() {
    this.users = Object.values(this.userData);
    this.users.forEach((user: any) => {
      if (this.user == user.email && this.password == user.password) {
        localStorage.setItem("id",user.id)
        localStorage.setItem("name",user.name)
        localStorage.setItem("user",user.email)
        localStorage.setItem("password",user.password)
        this.router.navigate(['/']);
      } else {
        return;
      }
    });
  }
}
