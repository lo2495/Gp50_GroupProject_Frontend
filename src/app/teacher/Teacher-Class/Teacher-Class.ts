import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
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
        this.dataSource = new MatTableDataSource(this.classes);
        this.dataSource.paginator = this.paginator;
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

    dialogRef.afterClosed().subscribe(result => {});
  }

  showClassDetails(classes: Class) {
    this.router.navigate(['/class-details', classes.classid]);
  }
  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.dataSource.paginator = this.paginator;
  }
}
