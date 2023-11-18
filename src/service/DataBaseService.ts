import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private baseUrl = 'http://localhost:5000';
  userName: string | undefined;
  constructor(private http: HttpClient) { }
  insertTeacher(teacher: any): Observable<any> {
    const url = `${this.baseUrl}/api/Addteachers`;
    return this.http.post<any>(url, teacher);
  }
  
  insertStudent(student: any): Observable<any> {
    const url = `${this.baseUrl}/api/AddStudents`;
    return this.http.post<any>(url, student);
  }
  insertClass(Class: any, userName:string): Observable<any> {
    const url = `${this.baseUrl}/api/AddClass`;
    Class.InstructorName = userName;
    return this.http.post<any>(url, Class);
  }


  ChangeGrades(student: any): Observable<any> {
    const url = `${this.baseUrl}/api/EditGrade`;
    return this.http.post<any>(url, student);
  }




}



