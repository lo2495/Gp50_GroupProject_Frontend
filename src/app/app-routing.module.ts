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
import { TeacherClass } from './teacher/Teacher-Class/Teacher-Class';
import { StudentProfilePage } from './student/Student-Profile/Student-Profile';
import { TeacherProfilePage } from './teacher/Teacher-Profile/Teacher-Profile';
import { ClassDetailsPage } from './teacher/Teacher-Class-Detail/Teacher-Class-Detail';
import { StudentMyClass } from './student/Student-MyClass/Student-MyClass';
import { ScoreDetailsPage } from './teacher/Teacher-ScoreDetails/Teacher-ScoreDetails';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin-home', component: AdminHomePage },
  { path: 'admin-teacher', component: AdminTeacherPage },
  { path: 'admin-student', component: AdminStudentPage },
  { path: 'student-home', component: StudentHome },
  { path: 'student-academic', component: StudentAcademicResults },
  { path: 'teacher-home', component: TeacherHome },
  { path: 'teacher-records', component: TeacherStudentsRecord},
  { path: 'teacher-scores', component: TeacherStudentsScores },
  { path: 'teacher-class', component: TeacherClass},
  { path: 'student-profile', component: StudentProfilePage},
  { path: 'teacher-profile', component: TeacherProfilePage},
  { path: 'class-details/:id', component: ClassDetailsPage },
  { path: 'student-myclass', component: StudentMyClass },
  { path: 'score-details/:studentID', component: ScoreDetailsPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }