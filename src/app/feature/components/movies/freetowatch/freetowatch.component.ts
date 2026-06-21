import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Result } from '../../../../shared/models/imovies';
import { MoviesService } from '../../../services/movies/movies.service';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-freetowatch',
  imports: [RouterModule],
  templateUrl: './freetowatch.component.html',
  styleUrl: './freetowatch.component.scss',
})
export class FreetowatchComponent {
moviesService: MoviesService = inject(MoviesService);
  movies:WritableSignal<Result[]> = signal<Result[]>([]);
  activeTab:WritableSignal<string> = signal<string>('tv');

  openMenu: number | null = null;

  toggleMenu(id: number) {
    this.openMenu = this.openMenu === id ? null : id;
  }

  ngOnInit() {
    this.getFreeToWatchMovies();
  }

 getFreeToWatchMovies() {
  this.moviesService.getFreeToWatch(this.activeTab()).subscribe({
    next: (res) => {
      this.movies.set(res.results);
    },
    error: (err) => {
      console.log(err);
    },
  });
}
}
