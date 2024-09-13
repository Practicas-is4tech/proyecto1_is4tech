import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser | null = null;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        this.router.navigate(['/dogs']);
      }
    });
  }

  onSignInSuccess(user: SocialUser): void {
    this.user = user;
    this.loggedIn = true;
    console.log(this.user);
    this.router.navigate(['/dogs']);
  }

  onSignInError(error: any): void {
    console.error('Google sign-in error', error);
  }
}
