import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Class } from 'src/app/Model/ClassInterface';
import { AddClassDialogComponent } from 'src/component/addClass-dialog-component/addClass-dialog.component';
@Component({
  selector: 'app-teacher-class',
  templateUrl: './Teacher-Class.html',
  styleUrls: ['./Teacher-Class.scss']
})
export class TeacherClass {

  classes: Class[] = [];
  constructor(private http: HttpClient,
    private dialog: MatDialog,
    private router: Router) { }
  ngOnInit(): void {
    this.fetchClasses();
  }
  fetchClasses() {
    this.http.get<Class[]>('http://localhost:5000/api/classes').subscribe(
      (response: Class[]) => {
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

  showClassDetails(classes: Class) {
    this.router.navigate(['/class-details', classes.classid]); 
}
}
