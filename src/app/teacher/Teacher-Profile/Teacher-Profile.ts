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
  TeacherProfile!: TeacherProfile;
  isEditMode: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
    const teacherProfileString = localStorage.getItem('TeacherProfile');
    this.TeacherProfile = JSON.parse(teacherProfileString!);
    console.log(this.TeacherProfile)
}

updateProfile(): void {
    this.userService.updateTeacherProfile(this.TeacherProfile!).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Profile updated successfully');
          localStorage.setItem('TeacherProfile', JSON.stringify(this.TeacherProfile));
        } else {
          console.log(response.message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode) {
      const teacherProfileString = localStorage.getItem('TeacherProfile');
      this.TeacherProfile = JSON.parse(teacherProfileString!);
    }
  }
}