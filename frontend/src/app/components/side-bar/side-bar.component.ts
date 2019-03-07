import { Component, OnInit } from '@angular/core';
import { MockSubjects } from 'src/app/mock-files/subjects_class';
import { SubjectsService } from 'src/app/services/subjects.service';
import { Router } from '@angular/router';
import { MockUsers } from '../../mock-files/user_class';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  mySubjects: MockSubjects[];
  allSubjects: MockSubjects[];
  pickedSubject: MockSubjects;
  currentUser: MockUsers = null;

  constructor(
    private service: SubjectsService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMySubjects();

    this.loginService.sendUser()
      .subscribe(user => this.currentUser = user);
    console.log(this.currentUser);
  }

  goToManageSubjects() {
    this.router.navigate(['/manage'])
  }

  getMySubjects() {
    if(localStorage.getItem('userId')) {

    }
    this.allSubjects = this.service.getSubsciptedSubjects();
    this.allSubjects.forEach(subject => {

    });
  }

  showDetails(event) {
    this.mySubjects.forEach(e => {
      if(e.name === event.target.innerText) {
        this.pickedSubject = e;
      }
    });
    this.service.sendPickedSubject(this.pickedSubject);
    this.router.navigate(['/subject']);
  }
}
