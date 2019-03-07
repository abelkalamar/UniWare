import { Component, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockUsers } from 'src/app/mock-files/user_class';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private currentUser: MockUsers = null;

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
    this.service.login(this.loginData.value)
      .subscribe(data => {
        localStorage.setItem('jwtToken', data.token);
        localStorage.setItem('userId', data.user._id);
        localStorage.setItem('username', data.user.username);
        this.currentUser = data.user;
        // console.log(this.currentUser);
        this.service.getUser(data.user);
        this.router.navigate(['/main'])
      });
    this.loginData.reset();
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  logOut() {
    localStorage.clear();
    this.currentUser = null;
    this.router.navigate(['/main']);
  }

  
}
