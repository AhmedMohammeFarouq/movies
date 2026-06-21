import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../../services/movies/movies.service';

@Component({
  selector: 'app-show-latest-trailers',
  imports: [],
  templateUrl: './show-latest-trailers.component.html',
  styleUrl: './show-latest-trailers.component.scss',
})
export class ShowLatestTrailersComponent {
  private activatedRoute = inject(ActivatedRoute);
    loading: WritableSignal<boolean> = signal(true);
  private moviesService = inject(MoviesService);

  private sanitizer = inject(DomSanitizer);

  trailerUrl: WritableSignal<SafeResourceUrl | null> = signal<SafeResourceUrl | null>(null);

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        this.loading.set(true);
   window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        if (id) {
          this.getTrailer(id);
        }



      },
    });
  }

  getTrailer(id: string) {
    this.moviesService.showLatestTrailers(id).subscribe({
      next: (res) => {
        const trailer = res.results.find((video: any) => video.site === 'YouTube');
          this.loading.set(false);
        if (trailer) {
          const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${trailer.key}?autoplay=1`,
          );

          this.trailerUrl.set(safeUrl);
        }
      },
    });
  }
}
