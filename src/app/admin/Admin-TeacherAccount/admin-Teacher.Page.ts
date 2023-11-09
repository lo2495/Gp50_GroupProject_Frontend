import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-Teacher.Page.html',
  styleUrls: ['./admin-Teacher.Page.scss'],

})
export class AdminTeacherPage {
  teachers: any[] = [];
  constructor(
    private http: HttpClient) {}
    displayedColumns: string[] = ['TeacherID', 'Name','Email','Gender','DateOfEmployment','PhoneNumber','Department','Designation', 'Actions'];

  ngOnInit(): void {
    this.fetchTeachers();
  }
  fetchTeachers() {
    this.http.get('http://localhost:5000/api/teachers').subscribe(
      (response: any) => {
        this.teachers = response;
      },
      (error: any) => {
        console.error('Failed to fetch teachers:', error);
      }
    );
  }
  deleteTeacher(teacher: any) {
    const index = this.teachers.indexOf(teacher);
    if (index !== -1) {
      this.teachers.splice(index, 1);
    }
  }
  addTeacher(){

  }
}