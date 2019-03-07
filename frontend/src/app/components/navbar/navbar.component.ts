import { Component, OnInit, Output, EventEmitter} from '@angular/core';
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

  @Output() public sendMySubjects = new EventEmitter();

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
        this.currentUser = data.user;
        this.sendMySubjects.emit(data.user.subjects);
        console.log(this.currentUser);
        this.router.navigate(['/main'])
      });
    this.loginData.reset();
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  logOut() {
    localStorage.removeItem('jwtToken');
    this.currentUser = null;
    this.router.navigate(['/main']);
  }



}
