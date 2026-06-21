import { Component } from '@angular/core';
import { HomesliderComponent } from '../homeslider/homeslider.component';
import { TrendingMoviesComponent } from '../../movies/trending-movies/trending-movies.component';
import { LatestTrailersComponent } from '../../movies/latest-trailers/latest-trailers.component';
import { TopmoviesComponent } from '../../movies/topmovies/topmovies.component';
import { FreetowatchComponent } from '../../movies/freetowatch/freetowatch.component';

@Component({
  selector: 'app-home',
  imports: [HomesliderComponent, TrendingMoviesComponent, LatestTrailersComponent,TopmoviesComponent, FreetowatchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
