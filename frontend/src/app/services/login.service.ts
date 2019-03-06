import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginURL = 'http://localhost:3000';

  login(loginData: FormData) {
    return this.http.post<any>(`${this.loginURL}/login`, loginData)
    .subscribe(data => {
      console.log(data);
      localStorage.setItem('jwtToken', data.token);
    });
  }

}
