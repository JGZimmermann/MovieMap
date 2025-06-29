
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  filme = '';
  filmes: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  buscarFilmes() {
    const url = `https://www.omdbapi.com/?apikey=a2606e73&s=${this.filme}&type=movie`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.filmes = data.Search || [];
      })
      .catch((err) => console.error('Erro ao buscar filmes:', err));
  }

  verDetalhes(imdbID: string) {
    this.router.navigate([imdbID], { relativeTo: this.route });
  }
}
