import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Result } from '../../../../shared/models/imovies';
import { MoviesService } from '../../../services/movies/movies.service';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-topmovies',
  imports: [RouterModule],
  templateUrl: './topmovies.component.html',
  styleUrl: './topmovies.component.scss',
})
export class TopmoviesComponent {
  moviesService: MoviesService = inject(MoviesService);
  openMenu: number | null = null;

  toggleMenu(id: number) {
    this.openMenu = this.openMenu === id ? null : id;
  }
  movies: WritableSignal<any[]> = signal([]);

  activeTab: WritableSignal<string> = signal('streaming');

  ngOnInit(): void {
    this.getData();
  }

  changeTab(tab: string) {
    this.activeTab.set(tab);

    this.getData();
  }

  getData() {
    if (this.activeTab() === 'streaming') {
      this.moviesService.getStreamingMovies().subscribe({
        next: (res: any) => {
          this.movies.set(res.results);
        },
      });
    }

    else if (this.activeTab() === 'tv') {
      this.moviesService.getOnTv().subscribe({
        next: (res: any) => {
          this.movies.set(res.results);
        },
      });
    } else if (this.activeTab() === 'rent') {
      this.moviesService.getForRent().subscribe({
        next: (res: any) => {
          this.movies.set(res.results);
        },
      });
    } else if (this.activeTab() === 'theaters') {
      this.moviesService.getInTheaters().subscribe({
        next: (res: any) => {
          this.movies.set(res.results);
        },
      });
    }
  }
}
