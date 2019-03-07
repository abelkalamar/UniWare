import { Injectable } from '@angular/core';
import { mock_files } from '../mock-files/mock_files';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getFilesForType(type: String) {
    let requiredFiles = [];
    mock_files.forEach(file => {
      if (file.type === type) {
        requiredFiles.push(file);
      }
    })
    return requiredFiles;
  }
}
