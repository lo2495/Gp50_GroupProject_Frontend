import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from 'src/component/addStudent-dialog-component/addStudent-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/component/DeleteConfirm-dialog-component/DeleteConfirm-dialog.component';

@Component({
    selector: 'app-teacher-studentsrecord',
    templateUrl: './Teacher-StudentsRecord.html',
    styleUrls: ['./Teacher-StudentsRecord.scss']
})
export class TeacherStudentsRecord {

        students: any[] = [];
        constructor(
          private http: HttpClient,
          private dialog: MatDialog) {}
          displayedColumns: string[] = ['StudentID', 'Name','StudentEmail','Gender','BirthDate','PhoneNumber','Status','Major','Actions'];
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
    
      
    }
