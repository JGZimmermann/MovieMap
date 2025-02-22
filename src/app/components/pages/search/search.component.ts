// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-search',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   template: `<div [innerHTML]="content"></div>`,
//   styleUrl: './search.component.css',
// })
// export class SearchComponent implements OnInit {
//   filmURL = localStorage.getItem('URL') || '';
//   content = '';
//   film: any;
//   getFilmWithPromise(): Promise<any> {
//     return fetch(this.filmURL)
//       .then((response) => response.json())
//       .then((film) => {
//         film = Object.values(film);
//         return film;
//       })
//       .catch((error) => console.error('Erro na Promise:', error));
//   }

//   ngOnInit() {
//     this.content = `<h1>Filmes</h1><div class="filme-container">`;

//     this.film = this.getFilmWithPromise().then((film) => {
//       film = film[0];
//       film.forEach((filme: any) => {
//         this.content += `
//           <div class="filme-card">
//             <img src="${filme.Poster}" alt="${filme.Title}">
//             <p>${filme.Title}</p>
//             <p>${filme.Year}</p>
//           </div>
//         `;
//       });

//       this.content += `</div>`;
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  filmURL = localStorage.getItem('URL') || '';
  filmes: any[] = [];

  getFilmWithPromise(): Promise<any> {
    return fetch(this.filmURL)
      .then((response) => response.json())
      .then((film) => Object.values(film))
      .catch((error) => console.error('Erro na Promise:', error));
  }

  ngOnInit() {
    this.getFilmWithPromise().then((film) => {
      this.filmes = film[0];
    });
  }
}
