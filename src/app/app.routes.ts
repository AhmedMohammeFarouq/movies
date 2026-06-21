import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';
import { ShowLatestTrailersComponent } from './feature/components/movies/show-latest-trailers/show-latest-trailers.component';
import { KeywordMoviesComponent } from './feature/components/movies/keyword-movies/keyword-movies.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./feature/components/home/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/components/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./feature/components/movies/movie-details/movie-details.component').then(
        (m) => m.MovieDetailsComponent,
      ),
  },
  {
    path: 'movie-keywords/:id/:name',
    component: KeywordMoviesComponent,
    title: 'Keyword Movies',
  },
  {
    path: 'person_id/:id',
    loadComponent: () =>
      import('./feature/components/movies/person-details/person-details.component').then(
        (m) => m.PersonDetailsComponent,
      ),
  },
  {
    path: 'show-latest-trailers/:id',
    component: ShowLatestTrailersComponent,
    title: 'Show Latest Trailers',
  },

  {
    path: 'pupularPeople',
    loadComponent: () =>
      import('./feature/components/movies/popularpeople/popularpeople.component').then(
        (m) => m.PopularpeopleComponent,
      ),
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./shared/components/profile/profile.component').then((c) => c.ProfileComponent),
  },

  {
    path: 'favorites',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./shared/components/favorites/favorites.component').then((c) => c.FavoritesComponent),
  },

  {
    path: 'watchlist',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./shared/components/watchlist/watchlist.component').then((c) => c.WatchlistComponent),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./feature/components/movies/movie-details/movie-details.component').then(
        (c) => c.MovieDetailsComponent,
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
