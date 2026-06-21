import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-popularpeople',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './popularpeople.component.html',
  styleUrl: './popularpeople.component.scss',
})
export class PopularpeopleComponent implements OnInit {

  moviesService: MoviesService = inject(MoviesService);

  peopleList: any[] = [];

  ngOnInit(): void {
    this.moviesService.getPopularPeople().subscribe({
      next: (data: any) => {
        this.peopleList = data.results;
      }
    });
  }
}
