import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MockUsers } from '../mock-files/user_class';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Output() public sendCurrentUser = new EventEmitter;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private baseURL = environment.baseURL;

  login(loginData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/login`, loginData);
  }

  getUser (user) {
    this.sendCurrentUser.emit(user);
  }

  sendUser() {
    return this.sendCurrentUser;
  }


}
