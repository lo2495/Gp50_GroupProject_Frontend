import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from 'src/component/addStudent-dialog-component/addStudent-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/component/DeleteConfirm-dialog-component/DeleteConfirm-dialog.component';
import { EditStudentDialogComponent } from 'src/component/editStudent-Score-dialog-component/editStudent-dialog.component';


@Component({
    selector: 'app-teacher-studentsscore',
    templateUrl: './Teacher-StudentsScore.html',
    styleUrls: ['./Teacher-StudentsScore.scss']
})
export class TeacherStudentsScores {
  rows: any[] = []; // Populate this array with your row data



        students: any[] = [];
        constructor(
          private http: HttpClient,
          private dialog: MatDialog) {}
          displayedColumns: string[] = ['StudentID', 'Name','StudentEmail','Major', 'Grade', 'Edit','Del'];
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
      
        deleteStudent(student: any) {
          const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
            width: '300px'
          });
      
          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              this.http.delete(`http://localhost:5000/api/students/${student.StudentID}`).subscribe(
                (response) => {
                  console.log('Student deleted successfully');
                  const index = this.students.findIndex((t) => t.StudentID === student.StudentID);
                  if (index >= 0) {
                    this.students.splice(index, 1);
                    location.reload();
                  }
                },
                (error) => {
                  console.error('Error deleting student:', error);
                }
              );
            }
          });
        }
      
        addStudent(){
          const dialogRef = this.dialog.open(AddStudentDialogComponent, {
            width: '60%',
            height: '50%'
          });
      
          dialogRef.afterClosed().subscribe(result => {
          });
        }
   
   
        editStudent(student: any) {
        const studentID = student.StudentID;
          const grade = student.Grade;
          
          const dialogRef = this.dialog.open(EditStudentDialogComponent, {
            width: '60%',
            height: '50%'
          });
          dialogRef.afterClosed().subscribe(result => {
          });
          
        }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
      }
