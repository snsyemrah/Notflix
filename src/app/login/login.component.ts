import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   username: string = ''; // Make sure you define their types
    password: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(['/add-movie']);
    } else {
      console.log('Login failed');
    }
  }
}
