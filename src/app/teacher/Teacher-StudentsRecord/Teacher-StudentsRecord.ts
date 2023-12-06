import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-teacher-studentsrecord',
  templateUrl: './Teacher-StudentsRecord.html',
  styleUrls: ['./Teacher-StudentsRecord.scss']
})
export class TeacherStudentsRecord {
  students: any[] = [];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private http: HttpClient,
    private dialog: MatDialog) { }
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
  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.dataSource.paginator = this.paginator;
  }
}
