import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private baseUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) {}

  insertTeacher(teacher: any): Observable<any> {
    const url = `${this.baseUrl}/api/Addteachers`; 
    return this.http.post<any>(url, teacher);
  }
  insertStudent(student: any): Observable<any> {
    const url = `${this.baseUrl}/api/AddStudents`; 
    return this.http.post<any>(url, student);
  }
  editScore(score: any): Observable<any> {
    const url = `${this.baseUrl}/api/AddStudents`; 
    return this.http.post<any>(url, score);
  }






}

