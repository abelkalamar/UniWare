import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectsService } from '../../services/subjects.service';
import { MockSubjects } from '../../mock-files/subjects_class';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.scss']
})
export class ManageSubjectsComponent implements OnInit {

  private subjects: MockSubjects[] = [];
  private selectedSubjects: MockSubjects[] = [];

  constructor(
    private router: Router,
    private service: SubjectsService
  ) { }

  ngOnInit() {
    this.getSubjects();
  }

  goToMainPage() {
    this.router.navigate(['/main']);
  }

  getSubjects() {
    this.subjects = this.service.getSubjects();
  }

  onSubmit() {
  }

  chooseSubject(subjectName: string): void {
    this.subjects.forEach((e, i) => {
      if (e.name == subjectName) {
        this.selectedSubjects.push(e);
        this.subjects.splice(i, 1);
      }
    });
  }

  removeSubject(subjectName: string): void {
    this.selectedSubjects.forEach((e, i) => {
      if (e.name == subjectName) {
        this.subjects.push(e);
        this.selectedSubjects.splice(i, 1);
      }
    });
  }

  sendSubjects() {
    const subjectIds = this.selectedSubjects.map(e => {
      return e.id;
    });
    this.service.sendSubjects(subjectIds)
      .subscribe(response => {
        console.log(response);
      });
  }

}
