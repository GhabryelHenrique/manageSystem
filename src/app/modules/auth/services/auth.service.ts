import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ATResponse, LoginFormDTO } from '../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string | null = localStorage.getItem('access_token');

  constructor(private http: HttpClient) { }


  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  login(data: LoginFormDTO) {
    return this.http.post<ATResponse>('http://localhost:3000/users/login', data)
  }

  logout(){
    this.accessToken = null;
    localStorage.removeItem('access_token');
  }

  register(data: any) {
    return this.http.post<any>('http://localhost:3000/users/register', data)
  }
}
