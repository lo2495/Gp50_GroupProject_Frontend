import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentProfile } from 'src/app/Model/UserInterface';

@Component({
  selector: 'app-teacher-scoredetail',
  templateUrl: './Teacher-ScoreDetails.html',
  styleUrls: ['./Teacher-ScoreDetails.scss']
})
export class ScoreDetailsPage implements OnInit {
  studentdetails!: StudentProfile;
  isEditable: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const studentID = this.route.snapshot.paramMap.get('studentID');
    if (studentID) {
      this.fetchStudentDetails(studentID);
    }
  }

  fetchStudentDetails(studentID: string) {
    this.http.get<StudentProfile>(`http://localhost:5000/api/student-details/${studentID}`)
      .subscribe(
        (data: StudentProfile) => {
          this.studentdetails = data;
        },
        (error) => {
          console.error('Error fetching student details:', error);
        }
      );
  }

  saveGrade(grade: any) {
    const updatedGrade = {
      studentId: this.studentdetails.StudentID,
      coursename: grade.CourseName,
      grade: grade.Grade
    };
    console.log(updatedGrade)
    this.http.put(`http://localhost:5000/api/updateGrade/${this.studentdetails.StudentID}`, updatedGrade)
      .subscribe(
        response => {
          console.log('Grade updated successfully!');
          grade.isEditing = false;
        },
        error => {
          console.error('Error updating grade:', error);
        }
      );
  }
}