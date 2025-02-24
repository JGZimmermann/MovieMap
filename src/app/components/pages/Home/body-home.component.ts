import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-body-home',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './body-home.component.html',
  styleUrl: './body-home.component.css'
})
export class BodyHomeComponent{
filme: String = ""
  router: any;

onSubmit(){
  localStorage.removeItem("URL")
  localStorage.setItem('URL',`https://www.omdbapi.com/?apikey=a2606e73&s=${this.filme}&type=movie`)
}
}
