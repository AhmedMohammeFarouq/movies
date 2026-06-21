import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovies } from '../../../shared/models/imovies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  _HttpClient: HttpClient = inject(HttpClient);

  private apiKey = '7ef6a4e6221849b870f144ac3b994951';

  private baseUrl = 'https://api.themoviedb.org/3';

  getTrendingMovies(time_window: string | undefined): Observable<IMovies> {
    return this._HttpClient.get<IMovies>(
      `${this.baseUrl}/trending/all/${time_window}?api_key=${this.apiKey}`,
    );
  }

  getFreeToWatch(time_window: string | undefined): Observable<IMovies> {
    return this._HttpClient.get<IMovies>(
      `${this.baseUrl}/discover/${time_window}?api_key=${this.apiKey}`,
    );
  }

  // Popular
  getPopularMovies() {
    return this._HttpClient.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  // Streaming
  getStreamingMovies() {
    return this._HttpClient.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_watch_monetization_types=flatrate`,
    );
  }

  // On TV
  getOnTv() {
    return this._HttpClient.get(`${this.baseUrl}/tv/on_the_air?api_key=${this.apiKey}`);
  }

  // For Rent
  getForRent() {
    return this._HttpClient.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_watch_monetization_types=rent`,
    );
  }

  // In Theaters
  getInTheaters() {
    return this._HttpClient.get(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}`);
  }

  // Trailer Videos
  getMovieVideos(id: number) {
    return this._HttpClient.get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`);
  }

  // Movie Details
  getMovieDetails(id: number | string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  // Movie Credits
  getMovieCredits(id: number | string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }
  // TV Details
  getTvDetails(id: number | string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`);
  }

  // TV Credits
  getTvCredits(id: number | string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`);
  }

  // ===============movies detilis ==========================

  // Movie Reviews
  getMovieReviews(id: number | string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}`);
  }

  // Movie Keywords
  getMovieKeywords(id: number | string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/movie/${id}/keywords?api_key=${this.apiKey}`);
  }

  // Movie Recommendations
  getMovieRecommendations(id: number | string): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}/movie/${id}/recommendations?api_key=${this.apiKey}`,
    );
  }

  // Movie External IDs
  getMovieExternalIds(id: number | string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/movie/${id}/external_ids?api_key=${this.apiKey}`);
  }

  getMovieKeywordsDetails(id: number | string, keyword: string): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_keywords=${id}`,
    );
  }

  getUserDetails(person_id: number | string): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}/person/${person_id}/combined_credits?api_key=${this.apiKey}`,
    );
  }

  getPersonCredits(id: number | string): Observable<any> {
    return this._HttpClient.get(
      `${this.baseUrl}/person/${id}/combined_credits?api_key=${this.apiKey}`,
    );
  }
  showLatestTrailers(id: number | string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`);
  }


  // Popular People
  getPopularPeople(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/person/popular?api_key=${this.apiKey}`);
  }

}
