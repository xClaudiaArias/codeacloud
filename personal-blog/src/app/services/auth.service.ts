import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})

export class AuthService {
  private isLoggedInStatus: boolean = false;
  
  login (username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isLoggedInStatus = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedInStatus = false;
  }
  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  } 
}
