import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted!', form.value);
    }
  }
}
