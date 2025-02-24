import { Component } from '@angular/core';

@Component({
  selector: 'app-body-perfil',
  standalone: true,
  imports: [],
  templateUrl: './body-perfil.component.html',
  styleUrl: './body-perfil.component.css'
})
export class BodyPerfilComponent {
  user : any = localStorage.getItem('name')
  id : any = localStorage.getItem('id')
  email : any = localStorage.getItem('user')
  password : any = localStorage.getItem('password')
}
