import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  registration(data: FormData) {
    console.log(data);
    this.http.post<any>(`http://localhost:3000/register`, data)
      .subscribe(response => {
        console.log(response);
      }); 
  }
}
