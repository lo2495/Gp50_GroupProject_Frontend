import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service.service';

@Component({
    selector: 'app-teacher-studentsrecord',
    templateUrl: './Teacher-StudentsRecord.html',
    styleUrls: ['./Teacher-StudentsRecord.scss']
})
export class TeacherStudentsRecord {
    userName: string | undefined;

    constructor(
        private userService: UserService,
        private http: HttpClient,
        private router: Router) { }

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
