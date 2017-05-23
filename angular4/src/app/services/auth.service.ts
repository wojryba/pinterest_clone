import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  jwtHelper: JwtHelper = new JwtHelper();

  // Configure Auth0
  lock = new Auth0Lock('dfPTgXtWaiVI8BYJC3BUhugCmN4x6pcE', 'wojryba.eu.auth0.com', {});

  // Store profile object in auth class
  userProfile: Object;


 constructor(private router: Router) {
    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for the Lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });
  }


 public login() {
   // Call the show method to display the widget.
   this.lock.show();
 }

 public authenticated() {

   // Check if there's an unexpired JWT
   // This searches for an item in localStorage with key == 'id_token'
   return tokenNotExpired();
 }

 public logout() {
    // Remove token and profile from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
    this.router.navigate(['']);
  }
}
