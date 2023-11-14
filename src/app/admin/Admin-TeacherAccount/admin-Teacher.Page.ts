import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddTeacherDialogComponent } from 'src/component/addteacher-dialog-component/addteacher-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from 'src/component/DeleteConfirm-dialog-component/DeleteConfirm-dialog.component';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-Teacher.Page.html',
  styleUrls: ['./admin-Teacher.Page.scss'],

})
export class AdminTeacherPage {
  teachers: any[] = [];
  constructor(
    private http: HttpClient,
    private dialog: MatDialog) { }
  displayedColumns: string[] = ['TeacherID', 'Name', 'Email', 'Gender', 'DateOfEmployment', 'PhoneNumber', 'Department', 'Designation', 'Actions'];

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
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.http.delete(`http://localhost:5000/api/teachers/${teacher.TeacherID}`).subscribe(
          (response) => {
            console.log('Teacher deleted successfully');
            const index = this.teachers.findIndex((t) => t.TeacherID === teacher.TeacherID);
            if (index >= 0) {
              this.teachers.splice(index, 1);
              location.reload();
            }
          },
          (error) => {
            console.error('Error deleting teacher:', error);
          }
        );
      }
    });
  }
  addTeacher() {
    const dialogRef = this.dialog.open(AddTeacherDialogComponent, {
      width: '60%',
      height: '70%'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}