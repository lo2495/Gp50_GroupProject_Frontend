import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClassDialogComponent } from 'src/component/addClass-dialog-component/addClass-dialog.component';
@Component({
  selector: 'app-teacher-class',
  templateUrl: './Teacher-Class.html',
  styleUrls: ['./Teacher-Class.scss']
})
export class TeacherClass {
  classes: any[] = [];
  displayedColumns: string[] = ['CourseName', 'ClassType','ClassDate','StartTime','EndTime','Venue','InstructorName'];
  constructor(private http: HttpClient,
    private dialog: MatDialog) { }
  ngOnInit(): void {
    this.fetchClasses();
  }
  fetchClasses() {
    this.http.get('http://localhost:5000/api/classes').subscribe(
      (response: any) => {
        this.classes = response;
      },
      (error: any) => {
        console.error('Failed to fetch classes:', error);
      }
    );
  }
  addClass() {
    const dialogRef = this.dialog.open(AddClassDialogComponent, {
      width: '60%',
      height: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  deleteClasses(classes:any){

  }
}
