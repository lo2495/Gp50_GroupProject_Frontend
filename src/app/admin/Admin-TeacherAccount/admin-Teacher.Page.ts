import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-Teacher.Page.html',
  styleUrls: ['./admin-Teacher.Page.scss'],

})
export class AdminTeacherPage {
  userName: string | undefined;
  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router) {}

  ngOnInit(): void {
    this.userName = this.userService.getUserName();
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
}