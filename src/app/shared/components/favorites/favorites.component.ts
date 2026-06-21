import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {

  private accountService = inject(AccountService);

  private authService = inject(AuthService);

  favorites = signal<any[]>([]);

  ngOnInit(): void {

    const accountId = this.authService.user()?.id;

    this.accountService
      .getFavoriteMovies(accountId)
      .subscribe({

        next: (res) => {

          this.favorites.set(res.results);

        }

      });

  }

}
