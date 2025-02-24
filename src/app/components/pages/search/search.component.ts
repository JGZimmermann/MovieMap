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
