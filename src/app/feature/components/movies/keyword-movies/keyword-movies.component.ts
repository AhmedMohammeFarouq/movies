import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';

import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';

import { ActivatedRoute, RouterLink } from '@angular/router';

import { MoviesService } from '../../../services/movies/movies.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-keyword-movies',

  standalone: true,

  imports: [CommonModule, RouterLink, DatePipe, DecimalPipe],

  templateUrl: './keyword-movies.component.html',

  styleUrl: './keyword-movies.component.scss',
})
export class KeywordMoviesComponent implements OnInit {
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  moviesService: MoviesService = inject(MoviesService);

  _ActivatedRoute: ActivatedRoute = inject(ActivatedRoute);

  movies: WritableSignal<any[]> = signal([]);

  keywordName = signal('');

  totalResults = signal(0);

  loading: WritableSignal<boolean> = signal(true);

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        const id = Number(params.get('id'));

        const name = params.get('name');

        this.keywordName.set(name || '');

        this.loading.set(true);

        this.getMoviesKeyword(id);

        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    });
  }

  getMoviesKeyword(id: string | number): void {
    this.moviesService.getMovieKeywordsDetails(id, this.keywordName()).subscribe({
      next: (res: any) => {
        console.log(res);

        this.movies.set(res.results);

        this.totalResults.set(res.total_results);

        this.loading.set(false);
      },

      error: (err: any) => {
        console.log(err);

        this.loading.set(false);
      },
    });
  }
}
