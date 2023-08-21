import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage = ''; // Error message variable
  username = '';
  password = '';
  isInputEdited = false;
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit(form: any) {
    if (form.valid) {
      const username = form.value.username;
      const password = form.value.password;

      const isAuthenticated = this.userService.authenticateUser(
        username,
        password
      );

      if (isAuthenticated) {
        this.router.navigate(['/addmovie']);
      } else {
        this.errorMessage = 'The username or password is incorrect!';
      }
    }
  }
  onInputEdit() {
    this.isInputEdited = true;
    this.errorMessage = ''; // Clear the error message when inputs are being edited
  }
}
