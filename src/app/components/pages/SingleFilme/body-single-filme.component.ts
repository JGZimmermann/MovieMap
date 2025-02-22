import { Component } from '@angular/core';

@Component({
  selector: 'app-body-single-filme',
  standalone: true,
  imports: [],
  templateUrl: './body-single-filme.component.html',
  styleUrl: './body-single-filme.component.css'
})
export class BodySingleFilmeComponent {
  filmData:any
  film:any
  title = "";
  body = "";
  imageURL = "";
  altImage = "";
  url: string = 'https://www.omdbapi.com/?t=the+boys&apikey=a2606e73'
  ngOnInit() {
    fetch(this.url).then(res => res.json())
    .then(json => {
      this.filmData = json;
      this.film = Object.values(this.filmData)
      this.title = this.film[0]
      this.body = this.film[9]
      this.imageURL = this.film[13]
      this.altImage = this.film[0]
    })
  }
  
  
}
