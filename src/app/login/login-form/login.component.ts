import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service.service';
interface LoginResponse {
  success: boolean;
  userName: string;
  redirectUrl: string;
  message: string;
  Name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = {
    loginID: '',
    password: ''
  };
  message = '';

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  login() {
    this.http.post<LoginResponse>('http://localhost:5000/api/login', this.form).subscribe(
      (response) => {
        if (response.success) {
          this.userService.setUserName(response.Name);
          this.router.navigate([response.redirectUrl]);
        } else {
          this.message = response.message;
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}