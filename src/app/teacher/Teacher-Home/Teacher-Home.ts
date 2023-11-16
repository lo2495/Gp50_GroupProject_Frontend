
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { AddStudentDialogComponent } from 'src/component/addStudent-dialog-component/addStudent-dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-home',
  templateUrl: './Teacher-Home.html',
  styleUrls: ['./Teacher-Home.scss']
})
export class TeacherHome {



  totalStudents!: number;
  totalTeachers!: number;
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private router: Router) { }

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



  addStudent(){
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: '60%',
      height: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

