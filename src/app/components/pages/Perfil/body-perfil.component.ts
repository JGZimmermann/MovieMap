import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-perfil',
  standalone: true,
  templateUrl: './body-perfil.component.html',
  styleUrls: ['./body-perfil.component.css']
})
export class BodyPerfilComponent {
  user: any = localStorage.getItem('name');
  id: any = localStorage.getItem('id');
  email: any = localStorage.getItem('user');
  password: any = localStorage.getItem('password');

  constructor(private router: Router) { }

  logout() {

    localStorage.removeItem('name');
    localStorage.removeItem('id');
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    localStorage.removeItem("isLogged")

    window.dispatchEvent(new Event('userLoggedOut'));

    this.router.navigate(['/login'])
  }
}
