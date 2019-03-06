import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginURL = 'http://localhost:5000';

  login(loginData: FormData) {
    return this.http.post<FormData>('/login', loginData)
    .subscribe(data => {
      return data
    });
  }

}