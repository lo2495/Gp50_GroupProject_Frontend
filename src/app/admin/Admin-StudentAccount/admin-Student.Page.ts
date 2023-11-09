import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-Student.Page.html',
  styleUrls: ['./admin-Student.Page.scss'],

})
export class AdminStudentPage {
  students: any[] = [];
  constructor(
    private http: HttpClient) {}
    displayedColumns: string[] = ['StudentID', 'Name','StudentEmail','Gender','BirthDate','PhoneNumber','Status','Major','Actions'];
  ngOnInit(): void {
    this.fetchStudents();
  }
  fetchStudents() {
    this.http.get('http://localhost:5000/api/students').subscribe(
      (response: any) => {
        this.students = response;
      },
      (error: any) => {
        console.error('Failed to fetch students:', error);
      }
    );
  }

  deleteStudent(student: any) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }

  addStudent(){

  }
}