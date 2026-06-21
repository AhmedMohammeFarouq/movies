import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-watchlist',
  imports: [],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.scss',
})
export class WatchlistComponent {

  private accountService = inject(AccountService);

  private authService = inject(AuthService);

  watchlist = signal<any[]>([]);

  ngOnInit(): void {

    const accountId = this.authService.user()?.id;

    this.accountService
      .getWatchlist(accountId)
      .subscribe({

        next: (res) => {

          this.watchlist.set(res.results);

        }

      });

  }

}
