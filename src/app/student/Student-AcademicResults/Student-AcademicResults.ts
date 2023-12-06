import { Component } from '@angular/core';
import { StudentProfile, UserData } from 'src/app/Model/UserInterface';
import { UserService } from 'src/app/shared/user.service.service';

@Component({
  selector: 'app-student-academic',
  templateUrl: './Student-AcademicResults.html',
  styleUrls: ['./Student-AcademicResults.scss']
})
export class StudentAcademicResults {
  userData: UserData | undefined;
  studentdetail: StudentProfile | undefined;

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userData = this.userService.getUserData();
    const studentProfileString = localStorage.getItem('StudentProfile');
    this.studentdetail = JSON.parse(studentProfileString!);
  }
}
