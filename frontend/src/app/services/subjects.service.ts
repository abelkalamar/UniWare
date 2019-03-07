import { Injectable } from '@angular/core';
import { mock_subjects } from 'src/app/mock-files/mock_subjects';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MockSubjects } from '../mock-files/subjects_class';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(
    private http: HttpClient,
  ) { }

  private baseURL = environment.baseURL;

  getSubsciptedSubjects() {
    return mock_subjects;
  }

  getSubjects(): MockSubjects[] {
    return mock_subjects;
    // const headers = new HttpHeaders({
    //   'uniware-token': localStorage.getItem('jwtToken')
    // });
    // return this.http.get<any>(`${this.baseURL}/subject`, { headers });
  }
}
