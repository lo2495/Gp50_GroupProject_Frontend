import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AsyncPipe } from '@angular/common';
import { DatabaseService } from 'src/service/DataBaseService';
import { MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { AdminHomePage } from './admin/Admin-Home/admin-Home.Page';
import { LoginComponent } from './login/login-form/login.component';
import { HeaderComponent } from 'src/component/header-component/header.component';
import { AdminSideNavComponent } from 'src/component/admin-sidenav-component/admin-sidenav.component';
import { StudentSideNavComponent } from 'src/component/student-sidenav-component/student-sidenav.component';
import { TeacherSideNavComponent } from 'src/component/teacher-sidenav-component/teacher-sidenav.component';

import { AdminStudentPage } from './admin/Admin-StudentAccount/admin-Student.Page';
import { AdminTeacherPage } from './admin/Admin-TeacherAccount/admin-Teacher.Page';
import { StudentHome } from './student/Student-Home/Student-Home';
import { StudentAcademicResults } from './student/Student-AcademicResults/Student-AcademicResults';
import { TeacherHome } from './teacher/Teacher-Home/Teacher-Home';
import { TeacherStudentsRecord } from './teacher/Teacher-StudentsRecord/Teacher-StudentsRecord';
import { TeacherStudentsScores } from './teacher/Teacher-StudentsScore/Teacher-StudentsScore';
import { TeacherClass } from './teacher/Teacher-Class/Teacher-Class';
import { TeacherProfilePage } from './teacher/Teacher-Profile/Teacher-Profile';
import { StudentProfilePage } from './student/Student-Profile/Student-Profile';
import { ClassDetailsPage } from './teacher/Teacher-Class-Detail/Teacher-Class-Detail';
import { StudentMyClass } from './student/Student-MyClass/Student-MyClass';
import { ConsoleLogComponent } from './console-log/console-log.component';
import { ScoreDetailsPage } from './teacher/Teacher-ScoreDetails/Teacher-ScoreDetails';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomePage,
    LoginComponent,
    TeacherHome,
    TeacherStudentsRecord,
    TeacherStudentsScores,
    TeacherClass,
    StudentHome,
    StudentAcademicResults,
    AdminStudentPage,
    AdminTeacherPage,
    TeacherProfilePage,
    StudentProfilePage,
    ClassDetailsPage,
    StudentMyClass,
    ConsoleLogComponent,
    ScoreDetailsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatPaginatorModule,
    HeaderComponent,
    AdminSideNavComponent,
    StudentSideNavComponent,
    TeacherSideNavComponent,
    AsyncPipe
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }