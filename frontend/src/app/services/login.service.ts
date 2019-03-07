import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private baseURL = environment.baseURL;

  login(loginData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/login`, loginData);
  }

}
