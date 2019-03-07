import { Component, OnInit } from '@angular/core';
import { MockSubjects } from 'src/app/mock-files/subjects_class';
import { SubjectsService } from 'src/app/services/subjects.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  mySubjects: MockSubjects[];

  constructor(private service: SubjectsService) { }

  ngOnInit() {
    this.getMySubjects();
  }

  getMySubjects() {
    this.mySubjects = this.service.getSubsciptedSubjects();
  }
}
