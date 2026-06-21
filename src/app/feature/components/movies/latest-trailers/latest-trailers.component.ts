import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-latest-trailers',
  imports: [RouterLink],
  templateUrl: './latest-trailers.component.html',
  styleUrl: './latest-trailers.component.scss',
})
export class LatestTrailersComponent {
  moviesService: MoviesService = inject(MoviesService);
  openMenu: number | null = null;

  toggleMenu(id: number) {
    this.openMenu = this.openMenu === id ? null : id;
  }
  movies: WritableSignal<any[]> = signal([]);

  activeTab: WritableSignal<string> = signal('popular');

  ngOnInit(): void {
    this.getData();
  }

  changeTab(tab: string) {
    this.activeTab.set(tab);

    this.getData();

  }

  getData() {
    if (this.activeTab() === 'popular') {
      this.moviesService.getPopularMovies().subscribe({
        next: (res: any) => {
          this.movies.set(res.results);
          console.log(res.results);

        },
      });
    } else if (this.activeTab() === 'streaming') {
      this.moviesService.getStreamingMovies().subscribe({
        next: (res: any) => {
          this.movies.set(res.results);
        },
      });
    } else if (this.activeTab() === 'tv') {
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
