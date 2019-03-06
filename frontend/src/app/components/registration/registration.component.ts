import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) { }

  newUser = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    profilePicture: [null, Validators.required]
  });


  ngOnInit() {
  }

  onSubmit(): void {
    console.log('ok');
  }

  goToMainPage() { }

}
