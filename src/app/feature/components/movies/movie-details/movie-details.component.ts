import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, DecimalPipe, SlicePipe } from '@angular/common';

import { MoviesService } from '../../../services/movies/movies.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterLink, DatePipe, DecimalPipe, SlicePipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent implements OnInit {
  moviesService: MoviesService = inject(MoviesService);
  _ActivatedRoute: ActivatedRoute = inject(ActivatedRoute);
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  movieDetails: WritableSignal<any> = signal(null);
  loading: WritableSignal<boolean> = signal(true);
  cast: WritableSignal<any[]> = signal([]);

  reviews: WritableSignal<any[]> = signal([]);

  keywords: WritableSignal<any[]> = signal([]);

  recommendations: WritableSignal<any[]> = signal([]);

  socialLinks: WritableSignal<any> = signal(null);

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        const id = Number(params.get('id'));
        this.loading.set(true);
        this.movieDetails.set(null);
        this.cast.set([]);
        this.reviews.set([]);
        this.keywords.set([]);
        this.recommendations.set([]);
        this.socialLinks.set(null);

        // SCROLL TOP

        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });

        // GET DATA

        this.getMovieDetails(id);
        this.getMovieCredits(id);
        this.getMovieReviews(id);
        this.getMovieKeywords(id);
        this.getMovieRecommendations(id);
        this.getMovieExternalIds(id);
        // console.log(id);
      },
    });
  }

  getMovieDetails(id: number | string) {
    return this.moviesService.getMovieDetails(id).subscribe({
      next: (res) => {
        this.movieDetails.set(res);
        this.loading.set(false);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getMovieExternalIds(id: number | string): void {
    this.moviesService.getMovieExternalIds(id).subscribe({
      next: (res: any) => {
        this.socialLinks.set(res);
      },

      error: (err: any) => {
        console.log(err);
      },
    });
  }
  getMovieRecommendations(id: number | string): void {
    this.moviesService.getMovieRecommendations(id).subscribe({
      next: (res: any) => {
        this.recommendations.set(res.results.slice(0, 12));
      },

      error: (err: any) => {
        console.log(err);
      },
    });
  }
  getMovieKeywords(id: number | string): void {
    this.moviesService.getMovieKeywords(id).subscribe({
      next: (res: any) => {
        this.keywords.set(res.keywords);
        // console.log(res.keywords);

      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  getMovieReviews(id: number | string): void {
    this.moviesService.getMovieReviews(id).subscribe({
      next: (res: any) => {
        this.reviews.set(res.results);
      },

      error: (err: any) => {
        console.log(err);
      },
    });
  }
  getMovieCredits(id: number | string): void {
    this.moviesService.getMovieCredits(id).subscribe({
      next: (res: any) => {
        this.cast.set(res.cast.slice(0, 10));
        console.log(res.cast);
      },

      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
