import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-studentsscore',
  templateUrl: './Teacher-StudentsScore.html',
  styleUrls: ['./Teacher-StudentsScore.scss']
})
export class TeacherStudentsScores {
  students: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

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

  showDetails(studentID:string) {
    this.router.navigate(['/score-details',studentID]);
  }
}