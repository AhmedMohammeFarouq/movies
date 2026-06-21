import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroment/enviroment';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  private http = inject(HttpClient);

  private authService = inject(AuthService);

  baseUrl = environment.apiUrl;

  getFavoriteMovies(accountId: number){

    return this.http.get<any>(
      `${this.baseUrl}/account/${accountId}/favorite/movies?session_id=${this.authService.getSessionId()}`
    );

  }

  addToFavorite(
    accountId: number,
    movieId: number
  ){

    return this.http.post(

      `${this.baseUrl}/account/${accountId}/favorite?session_id=${this.authService.getSessionId()}`,

      {
        media_type: 'movie',
        media_id: movieId,
        favorite: true
      }

    );

  }

  getWatchlist(accountId: number){

    return this.http.get<any>(
      `${this.baseUrl}/account/${accountId}/watchlist/movies?session_id=${this.authService.getSessionId()}`
    );

  }
}
