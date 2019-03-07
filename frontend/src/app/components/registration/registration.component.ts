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

  private selectedPicture: File = null;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) { }

  newUser = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });


  ngOnInit() {
  }

  onSubmit(): void {
    const userData = new FormData();
    userData.append('username', this.newUser.value.username);
    userData.append('password', this.newUser.value.password);
    userData.append('profilePicture', this.selectedPicture[0]);
    this.service.registration(userData)
      .subscribe(response => {
        console.log(response);
      });
  }

  goToMainPage() {
    this.router.navigate(['/']);
  }

  onFileSelected(event) {
    this.selectedPicture = event.target.files;
    console.log(this.selectedPicture);
  }
}
