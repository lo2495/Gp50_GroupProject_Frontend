import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Class } from 'src/app/Model/ClassInterface';
import { UserService } from 'src/app/shared/user.service.service';

@Component({
  selector: 'app-student-class',
  templateUrl: './Student-MyClass.html',
  styleUrls: ['./Student-MyClass.scss']
})
export class StudentMyClass {
  studentID?: string;
  classID: any[] = [];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
    const storedStudentID = localStorage.getItem('studentID');
    if (storedStudentID) {
      this.studentID = storedStudentID;
      this.getClasses();
    } else {
      const userData = this.userService.getUserData();
      if (userData && userData.UserRole === 'student') {
        this.studentID = userData.LoginID;
        localStorage.setItem('studentID', this.studentID);
        this.getClasses();
      }
    }
  }

  getClasses() {
    this.http.get<any[]>(`http://localhost:5000/api/attendance/${this.studentID}`).subscribe(
      (response) => {
        this.classID = response;
        this.getClassDetails();
      },
      (error) => {
        console.error('Error occurred while fetching classes:', error);
      }
    );
  }

  getClassDetails() {
    for (const classItem of this.classID) {
      const classId = classItem.ClassID;
      this.http.get<Class>(`http://localhost:5000/api/classes/${classId}`).subscribe(
        (classDetails: Class) => {
          classItem.ClassDetails = classDetails;
          this.http.get<any>(`http://localhost:5000/api/attendance/${this.studentID}/${classId}`).subscribe(
            (attendanceRecord: any) => {
              classItem.status = attendanceRecord.Status;
              classItem.remark = attendanceRecord.Remarks;
              this.dataSource = new MatTableDataSource(this.classID);
              this.dataSource.paginator = this.paginator;
            },
            (error) => {
              console.error(`Error occurred while fetching attendance records for studentID ${this.studentID} and classID ${classId}:`, error);
            }
          );
        },
        (error) => {
          console.error(`Error occurred while fetching class details for classID ${classId}:`, error);
        }
      );
    }
  }

  onPageChange(event: any) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.paginator.page.emit(event);
  }
}