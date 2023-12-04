import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service.service';
import { StudentProfile, UserData } from 'src/app/Model/UserInterface';

@Component({
  selector: 'StudentProfile-Page',
  templateUrl: './Student-Profile.html',
  styleUrls: ['./Student-Profile.scss']
})
export class StudentProfilePage implements OnInit {
  userData: UserData | undefined;
  studentProfile: StudentProfile | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
    const storedProfile = localStorage.getItem('studentProfile');
    if (storedProfile) {
      this.studentProfile = JSON.parse(storedProfile);
    } else {
      this.userService.getUserProfile(this.userData.LoginID, this.userData.UserRole).subscribe(
        (response: any) => {
          if (response.success) {
            this.studentProfile = response.userProfile as StudentProfile;
            localStorage.setItem('studentProfile', JSON.stringify(this.studentProfile));
          } else {
            console.log(response.message);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }


  updateProfile(): void {
    this.userService.updateStudentProfile(this.studentProfile!).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Profile updated successfully');
          localStorage.setItem('studentProfile', JSON.stringify(this.studentProfile));
        } else {
          console.log(response.message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}