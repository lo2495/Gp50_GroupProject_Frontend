import { Injectable } from '@angular/core';
import { StudentProfile, TeacherProfile, UserData } from '../Model/UserInterface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData!: UserData;
  Student!: StudentProfile;
  Teacher!: TeacherProfile;

  constructor(private http: HttpClient) { }

  public setUserData(userData: UserData) {
    this.userData = userData;
  }

  public getUserData() {
    return this.userData;
  }

  getUserProfile(loginID: string, UserRole: string): Observable<UserData> {
    const requestData = { loginID, UserRole };
    return this.http.post<UserData>('http://localhost:5000/api/user-profile', requestData);
  }
  updateStudentProfile(studentProfile:StudentProfile): Observable<any> {  
    return this.http.post<any>('http://localhost:5000/api/students/update-profile', studentProfile);
  }
  updateTeacherProfile(teacherProfile:TeacherProfile): Observable<any> {  
    return this.http.post<any>('http://localhost:5000/api/teachers/update-profile', teacherProfile);
  }
}