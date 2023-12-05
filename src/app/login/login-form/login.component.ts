import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service.service';
import { StudentProfile, UserData } from 'src/app/Model/UserInterface';

interface LoginResponse {
  success: boolean;
  userData: UserData;
  redirectUrl: string;
  message: string;
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
  studentProfile!: StudentProfile;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  login() {
    this.http.post<LoginResponse>('http://localhost:5000/api/login', this.form).subscribe(
      (response) => {
        if (response.success) {
          this.userService.setUserData(response.userData)
          localStorage.setItem('studentID', response.userData.LoginID);
          if (response.userData.UserRole == "student") {
            this.userService.getUserProfile(response.userData.LoginID, response.userData.UserRole).subscribe(
              (Profileresponse: any) => {
                localStorage.setItem('StudentProfile', JSON.stringify(Profileresponse));
              },
              (error) => {
                console.log(error);
              }
            );
          }
          else if (response.userData.UserRole == "teacher"){
            this.userService.getUserProfile(response.userData.LoginID, response.userData.UserRole).subscribe(
              (Profileresponse: any) => {
                localStorage.setItem('TeacherProfile', JSON.stringify(Profileresponse));
              },
              (error) => {
                console.log(error);
              }
            );
          }
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