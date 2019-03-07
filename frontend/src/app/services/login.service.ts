import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  loginURL = 'http://localhost:3000';

  login(loginData: FormData): Observable<any> {
    return this.http.post<any>(`${this.loginURL}/login`, loginData);
  }

}
