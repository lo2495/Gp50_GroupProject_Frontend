import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-Student.Page.html',
  styleUrls: ['./admin-Student.Page.scss'],

})
export class AdminStudentPage {
  userName: string | undefined;
  students: any[] = [];
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router) {}
    displayedColumns: string[] = ['StudentID', 'Name','StudentEmail','Gender','BirthDate','PhoneNumber','Actions'];
  ngOnInit(): void {
    this.userName = this.userService.getUserName();
    this.fetchStudents();
  }
  fetchStudents() {
    this.http.get('http://localhost:5000/api/students').subscribe(
      (response: any) => {
        this.students = response; // Assign retrieved student records to the array
      },
      (error: any) => {
        console.error('Failed to fetch students:', error);
      }
    );
  }
  logout() {
    this.http.post('http://localhost:5000/api/logout', {}).subscribe(
      (response: any) => {
        console.log(response.message);
        this.router.navigate(['']);
      },
      (error: any) => {
        console.error('Logout failed:', error);
      }
    );
  }
  deleteStudent(student: any) {
    // Add your delete logic here
    // For example, you can delete the student from the 'students' array
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
}