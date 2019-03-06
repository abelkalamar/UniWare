import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router
    ) { }

    loginData = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  ngOnInit() {
  }

  login(): void {
    this.service.login(this.loginData.value);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
