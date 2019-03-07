import { Injectable, Output } from '@angular/core';
import { mock_subjects } from 'src/app/mock-files/mock_subjects';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MockSubjects } from '../mock-files/subjects_class';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(
    private http: HttpClient,
  ) { }

  @Output() detailedSubject = new EventEmitter();

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

  sendSubjects(subjectIds: String[]) {
    console.log(subjectIds);
    return this.http.post(`${this.baseURL}/subscribe`, subjectIds);
  }

  sendPickedSubject(subject: any) {
    this.detailedSubject.emit(subject);
  }

  sendEventEmitter() {
    // return this.detailedSubject;
    return mock_subjects[0];
  }
}
