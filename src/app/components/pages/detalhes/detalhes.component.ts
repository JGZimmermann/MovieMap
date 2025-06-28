import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateService } from './translate.service'; // ajuste o caminho conforme seu projeto

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
  providers: [TranslateService]
})
export class DetalhesComponent implements OnInit {
  filme: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private translateService: TranslateService
  ) { }

  async ngOnInit() {
    const imdbID = this.route.snapshot.paramMap.get('id');
    if (imdbID) {
      this.http.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=a2606e73`)
        .subscribe(async (detalhes: any) => {
          this.filme = detalhes;

          // Tradução dos campos principais
          this.filme.TitlePTBR = await this.translateService.translate(detalhes.Title);
          this.filme.GenrePTBR = await this.translateService.translate(detalhes.Genre);
          this.filme.PlotPTBR = await this.translateService.translate(detalhes.Plot);
        });
    }
  }
}
