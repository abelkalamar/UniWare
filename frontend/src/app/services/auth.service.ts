import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  registration(userData: FormData) {
    return this.http.post<any>(`${this.baseURL}/register`, userData);
  }

}
