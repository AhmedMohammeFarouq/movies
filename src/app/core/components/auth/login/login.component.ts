import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  isLoading = false;
  errorMessage = '';

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    const { username, password } = this.loginForm.value;

    this.authService.createRequestToken().subscribe({
      next: (res) => {
        const token = res.request_token;
        this.authService.validateWithLogin(token, username!, password!).subscribe({
          next: () => {
            this.authService.createSession(token).subscribe({
              next: (sessionRes) => {
                this.authService.saveSession(sessionRes.session_id);
                this.authService.getAccountDetails().subscribe({
                  next: () => {
                    this.isLoading = false;
                    this.router.navigate(['/home']);
                  },
                  error: (err) => {
                    this.isLoading = false;
                    this.errorMessage = 'Failed to load account details.';
                  }
                });
              },
              error: (err) => {
                this.isLoading = false;
                this.errorMessage = 'Failed to create session. Please try again.';
              }
            });
          },
          error: (err) => {
            this.isLoading = false;
            this.errorMessage = err.error?.status_message || 'Invalid username or password.';
          }
        });
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to connect to TMDB.';
      }
    });
  }
}
