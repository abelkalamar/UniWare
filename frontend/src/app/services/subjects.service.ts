import { Injectable } from '@angular/core';
import { mock_subjects } from 'src/app/mock-files/mock_subjects';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(
    private http: HttpClient,
  ) { }

  private baseURL = environment.baseURL;

  getSubsciptedSubjects () {
    return mock_subjects;
  }

  getSubjects () {
    // return this.http.get<any>(`${this.baseURL}/login`, loginData);
  }
}
