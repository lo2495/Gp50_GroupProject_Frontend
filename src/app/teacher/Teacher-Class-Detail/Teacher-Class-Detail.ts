import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Class } from 'src/app/Model/ClassInterface';

interface Student {
  StudentID: string;
  Name: string;
  Status: string;
  Remarks: string;
  isEditable?: boolean;
}

@Component({
  selector: 'teacher-class-detail',
  templateUrl: './Teacher-Class-Detail.html',
  styleUrls: ['./Teacher-Class-Detail.scss']
})
export class ClassDetailsPage implements OnInit {
  classId!: string;
  students: Student[] = [];
  classDetails: Class = {
    classid: '',
    CourseName: '',
    ClassType: '',
    ClassDate: '',
    StartTime: '',
    EndTime: '',
    Venue: '',
    InstructorName: ''
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.classId = params['id'];
      this.fetchClassDetails();
      this.fetchStudentData();
    });
  }

  fetchClassDetails() {
    this.http
      .get<Class>(`http://localhost:5000/api/classes/${this.classId}`)
      .subscribe(
        (response: Class) => {
          this.classDetails = response;
        },
        (error: any) => {
          console.error('Failed to fetch class details:', error);
        }
      );
  }

  fetchStudentData() {
    this.http
      .get<Student[]>(`http://localhost:5000/api/classes/${this.classId}/students`)
      .subscribe(
        (response: Student[]) => {
          this.students = response;
        },
        (error: any) => {
          console.error('Failed to fetch student data:', error);
        }
      );
  }

  updateStatusAndRemarks(student: Student, newStatus: string, newRemarks: string) {
    student.Status = newStatus;
    student.Remarks = newRemarks;
    
    this.http
      .put(
        `http://localhost:5000/api/attendance/${this.classId}/${student.StudentID}`,
        { Status: newStatus, Remarks: newRemarks }
      )
      .subscribe(
        () => {
          console.log('Student status and remarks updated successfully');
        },
        (error: any) => {
          console.error('Failed to update student status and remarks:', error);
        }
      );
  }
  
  saveChanges() {
    for (const student of this.students) {
      this.updateStatusAndRemarks(student, student.Status, student.Remarks);
    }
  }

  editable(student: Student) {
    student.isEditable = true;
  }
}