import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../services/subjects.service';
import { MockSubjects } from 'src/app/mock-files/subjects_class';
import { FilesService } from 'src/app/services/files.service';
import { MockFiles } from 'src/app/mock-files/file_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailed-subject',
  templateUrl: './detailed-subject.component.html',
  styleUrls: ['./detailed-subject.component.scss']
})
export class DetailedSubjectComponent implements OnInit {

  constructor(
    private filesService: FilesService,
    private subjectsService: SubjectsService,
    private router: Router
  ) { }

  private pickedSubject: MockSubjects;
  private currentFileType: String = 'lecture';
  private files: MockFiles[] = [];

  ngOnInit() {
    this.pickedSubject = this.subjectsService.sendEventEmitter();
    this.getFilesForType();

  }

  getFilesForType() {
    this.files = this.filesService.getFilesForType(this.currentFileType);
  }

  selectType(event) {
    this.currentFileType = event.target.textContent;
    this.getFilesForType();
  }

  goToMainPage() {
    this.router.navigate(['/main']);
  }

  downloadFile(event) {
    let requiredFile: MockFiles;
    this.files.forEach(file => {
      if (file.name === event.target.textContent.trim()) {
        requiredFile = file;
      }
    });
    console.log(requiredFile);
  };
}

