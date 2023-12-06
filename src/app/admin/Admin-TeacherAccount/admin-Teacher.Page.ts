import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddTeacherDialogComponent } from 'src/component/addteacher-dialog-component/addteacher-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmDialogComponent } from 'src/component/DeleteConfirm-dialog-component/DeleteConfirm-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-Teacher.Page.html',
  styleUrls: ['./admin-Teacher.Page.scss'],
})
export class AdminTeacherPage {
  teachers: any[] = [];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private http: HttpClient,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchTeachers();
  }
  fetchTeachers() {
    this.http.get('http://localhost:5000/api/teachers').subscribe(
      (response: any) => {
        this.teachers = response;
        this.dataSource = new MatTableDataSource(this.teachers);
        this.dataSource.paginator = this.paginator;
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
            const index = this.teachers.findIndex(
              (t) => t.TeacherID === teacher.TeacherID
            );
            if (index >= 0) {
              this.teachers.splice(index, 1);
              this.dataSource.data = this.teachers; 
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
      this.fetchTeachers();
    });
  }
  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.dataSource.paginator = this.paginator;
  }
}