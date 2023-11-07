import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-Home.Page.html',
  styleUrls: ['./admin-Home.Page.scss'],

})
export class AdminHomePage {
  userName: string | undefined;
  totalStudents!: number;
  totalTeachers!: number;
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.userName = this.userService.getUserName();
    this.fetchTotalStudents();
    this.fetchTotalTeachers();
  }

  logout() {
    this.http.post('http://localhost:5000/api/logout', {}).subscribe(
      (response: any) => {
        console.log(response.message);
        this.router.navigate(['']);
      },
      (error: any) => {
        console.error('Logout failed:', error);
      }
    );
  }
  fetchTotalStudents() {
    this.http.get<any>('http://localhost:5000/api/students/count').subscribe(
      (response: any) => {
        this.totalStudents = response.total_students;
      },
      (error) => {
        console.error('Error fetching total students:', error);
      }
    );
  }

  fetchTotalTeachers() {
    this.http.get<any>('http://localhost:5000/api/teachers/count').subscribe(
      (response: any) => {
        this.totalTeachers = response.total_teachers;
      },
      (error) => {
        console.error('Error fetching total teachers:', error);
      }
    );
  }
}