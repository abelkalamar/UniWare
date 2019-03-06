import { Injectable } from '@angular/core';
import { mock_subjects } from 'src/app/mock-files/mock_subjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }

  getSubsciptedSubjects () {
    return mock_subjects;
  }
}
