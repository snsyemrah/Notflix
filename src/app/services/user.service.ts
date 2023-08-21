// user.service.ts
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private defaultUser: User = { username: 'admin', password: '1234' };

  // Kullanıcı doğrulama işlemini gerçekleştiren metot
  authenticateUser(username: string, password: string): boolean {
    return (
      this.defaultUser.username === username &&
      this.defaultUser.password === password
    );
  }
}
