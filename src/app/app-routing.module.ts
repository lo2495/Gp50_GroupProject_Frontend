import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login-form/login.component';
import { AdminHomePage } from './admin/Admin-Home/admin-Home.Page';
import { AdminStudentPage } from './admin/Admin-StudentAccount/admin-Student.Page';
import { AdminTeacherPage } from './admin/Admin-TeacherAccount/admin-Teacher.Page';
import { StudentHome } from './student/Student-Home/Student-Home';
import { StudentAcademicResults } from './student/Student-AcademicResults/Student-AcademicResults';
import { TeacherHome } from './teacher/Teacher-Home/Teacher-Home';
import { TeacherStudentsRecord } from './teacher/Teacher-StudentsRecord/Teacher-StudentsRecord';
import { TeacherStudentsScores } from './teacher/Teacher-StudentsScore/Teacher-StudentsScore';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin-home', component: AdminHomePage },
  { path: 'admin-teacher', component: AdminTeacherPage },
  { path: 'admin-student', component: AdminStudentPage },
  { path: 'student-home', component: StudentHome },
  { path: 'student-academic', component: StudentAcademicResults },
  { path: 'teacher-home', component: TeacherHome },
  { path: 'teacher-records', component: TeacherStudentsRecord},
  { path: 'teacher-scores', component: TeacherStudentsScores }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }