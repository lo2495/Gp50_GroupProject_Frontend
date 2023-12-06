import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddTeacherDialogComponent } from 'src/component/addteacher-dialog-component/addteacher-dialog.component';
import { AddStudentDialogComponent } from 'src/component/addStudent-dialog-component/addStudent-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-Home.Page.html',
  styleUrls: ['./admin-Home.Page.scss'],

})
export class AdminHomePage {
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

  addTeacher() {
    const dialogRef = this.dialog.open(AddTeacherDialogComponent, {
      width: '60%',
      height: '70%'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  addStudent() {
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