import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service.service';
import { TeacherProfile, UserData } from 'src/app/Model/UserInterface';

@Component({
  selector: 'TeacherProfile-Page',
  templateUrl: './Teacher-Profile.html',
  styleUrls: ['./Teacher-Profile.scss']
})
export class TeacherProfilePage implements OnInit {
  userData: UserData | undefined;
  teacherProfile: TeacherProfile | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
    const storedProfile = localStorage.getItem('teacherProfile');
    if (storedProfile) {
      this.teacherProfile = JSON.parse(storedProfile);
    } else {
      this.userService.getUserProfile(this.userData.LoginID, this.userData.UserRole).subscribe(
          (response: any) => {
            if (response.success) {
              this.teacherProfile = response.userProfile as TeacherProfile;
              localStorage.setItem('teacherProfile',JSON.stringify(this.teacherProfile));
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
    this.userService.updateTeacherProfile(this.teacherProfile!).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Profile updated successfully');
          localStorage.setItem('teacherProfile', JSON.stringify(this.teacherProfile));
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