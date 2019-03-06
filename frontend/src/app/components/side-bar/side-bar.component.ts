import { Component, OnInit } from '@angular/core';
import { MockSubjects } from 'src/app/mock-files/subjects_class';
import { SubjectsService } from 'src/app/services/subjects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  private mySubjects: MockSubjects[];

  constructor(
    private service: SubjectsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMySubjects();
  }

  goToManageSubjects() {
    this.router.navigate(['/manage'])
  }

  getMySubjects() {
    this.mySubjects = this.service.getSubsciptedSubjects();
  }
}
