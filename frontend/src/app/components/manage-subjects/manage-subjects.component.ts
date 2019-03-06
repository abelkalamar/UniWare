import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.scss']
})
export class ManageSubjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
