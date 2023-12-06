import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-teacher-studentsscore',
  templateUrl: './Teacher-StudentsScore.html',
  styleUrls: ['./Teacher-StudentsScore.scss']
})
export class TeacherStudentsScores {
  students: any[] = [];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private http: HttpClient, private router: Router) { }
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

  showDetails(studentID: string) {
    this.router.navigate(['/score-details', studentID]);
  }
  
  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.dataSource.paginator = this.paginator;
  }
}