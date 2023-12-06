import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from 'src/component/addStudent-dialog-component/addStudent-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/component/DeleteConfirm-dialog-component/DeleteConfirm-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-Student.Page.html',
  styleUrls: ['./admin-Student.Page.scss'],
})
export class AdminStudentPage {
  students: any[] = [];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents() {
    this.http.get('http://localhost:5000/api/students').subscribe(
      (response: any) => {
        this.students = response;
        this.dataSource = new MatTableDataSource(this.students);
        this.dataSource.paginator = this.paginator;
      },
      (error: any) => {
        console.error('Failed to fetch students:', error);
      }
    );
  }

  deleteStudent(student: any) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.http
          .delete(`http://localhost:5000/api/students/${student.StudentID}`)
          .subscribe(
            (response) => {
              console.log('Student deleted successfully');
              const index = this.students.findIndex(
                (t) => t.StudentID === student.StudentID
              );
              if (index >= 0) {
                this.students.splice(index, 1);
                this.dataSource.data = this.students; 
              }
            },
            (error) => {
              console.error('Error deleting student:', error);
            }
          );
      }
    });
  }

  addStudent() {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: '60%',
      height: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fetchStudents();
    });
  }

  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.dataSource.paginator = this.paginator;
  }
}