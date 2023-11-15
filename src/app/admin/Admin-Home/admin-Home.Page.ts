import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-Home.Page.html',
  styleUrls: ['./admin-Home.Page.scss'],

})
export class AdminHomePage {
  totalStudents!: number;
  totalTeachers!: number;
  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTotalStudents();
    this.fetchTotalTeachers();
  }

  fetchTotalStudents() {
    this.http.get<any>('http://localhost:5000/api/students/count').subscribe(
      (response: any) => {
        this.totalStudents = response.total_students;
      },
      (error) => {
        console.error('Error fetching total students:', error);
      }
    );
  }

  fetchTotalTeachers() {
    this.http.get<any>('http://localhost:5000/api/teachers/count').subscribe(
      (response: any) => {
        this.totalTeachers = response.total_teachers;
      },
      (error) => {
        console.error('Error fetching total teachers:', error);
      }
    );
  }
}