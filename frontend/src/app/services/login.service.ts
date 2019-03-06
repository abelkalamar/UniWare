import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginURL = 'http://localhost:5000/login';

  // sendUserDetails(User): Observable<User> {
  //   return this.http.post<User>(this.loginURL, {
      
  //   });
}