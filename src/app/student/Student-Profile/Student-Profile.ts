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
    StudentProfile!: StudentProfile;
    isEditMode: boolean = false;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userData = this.userService.getUserData();
        const studentProfileString = localStorage.getItem('StudentProfile');
        this.StudentProfile = JSON.parse(studentProfileString!);
    }

    updateProfile(): void {
        this.userService.updateStudentProfile(this.StudentProfile!).subscribe(
            (response: any) => {
                if (response.success) {
                    console.log('Profile updated successfully');
                    localStorage.setItem('StudentProfile', JSON.stringify(this.StudentProfile));
                    const userDataString = localStorage.getItem('userData');
                    if (userDataString) {
                        const userData: UserData = JSON.parse(userDataString);
                        userData.Name = this.StudentProfile.Name;
                        localStorage.setItem('userData', JSON.stringify(userData));
                    }
                    location.reload();
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
            const studentProfileString = localStorage.getItem('StudentProfile');
            this.StudentProfile = JSON.parse(studentProfileString!);
        }
    }
}