import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-person-details',
  imports: [RouterLink],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.scss',
})
export class PersonDetailsComponent implements OnInit {
  // moviesService: MoviesService = inject(MoviesService);

  // ngOnInit(): void {

  // }

  // getUserDetails(person_id: number | string) {
  //   this.moviesService.getUserDetails(person_id).subscribe({
  //     next: (res: any) => {
  //       console.log(res);
  //     },
  //     error: (err: any) => {
  //       console.log(err);
  //     },
  //   });
  // }
  private _MoviesService = inject(MoviesService);

  private _ActivatedRoute = inject(ActivatedRoute);

  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  person: WritableSignal<any> = signal(null);
  fallbackImage = signal('');
  fallbackName = signal('');
  credits: WritableSignal<any[]> = signal([]);

  loading = signal(true);

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        const id = Number(params.get('id'));

        const image = this._ActivatedRoute.snapshot.queryParamMap.get('image');
        const name = this._ActivatedRoute.snapshot.queryParamMap.get('name');
        this.fallbackImage.set(image || '');
        this.fallbackName.set(name || '');
        this.loading.set(true);

        this.getPerson(id);

        this.getCredits(id);

        window.scrollTo(0, 0);
      },
    });
  }

  getPerson(id: number): void {
    this._MoviesService.getUserDetails(id).subscribe({
      next: (res: any) => {
        this.person.set(res);

        this.loading.set(false);
      },
    });
  }

  getCredits(id: number): void {
    this._MoviesService.getPersonCredits(id).subscribe({
      next: (res: any) => {
        this.credits.set(res.cast.slice(0, 12));
      },
    });
  }
}
