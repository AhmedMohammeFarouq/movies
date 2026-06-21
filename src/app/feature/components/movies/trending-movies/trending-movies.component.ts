import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { Result } from '../../../../shared/models/imovies';
import { DatePipe } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trending-movies',
  imports: [RouterModule],
  templateUrl: './trending-movies.component.html',
  styleUrl: './trending-movies.component.scss',
})
export class TrendingMoviesComponent implements OnInit {
  moviesService: MoviesService = inject(MoviesService);
  movies:WritableSignal<Result[]> = signal<Result[]>([]);
  activeTab:WritableSignal<string> = signal<string>('day');

  openMenu: number | null = null;

  toggleMenu(id: number) {
    this.openMenu = this.openMenu === id ? null : id;
  }

  ngOnInit() {
    this.getTrendingMovies();
  }

 getTrendingMovies() {
  this.moviesService.getTrendingMovies(this.activeTab()).subscribe({
    next: (res) => {
      this.movies.set(res.results);
    },
    error: (err) => {
      console.log(err);
    },
  });
}
}
