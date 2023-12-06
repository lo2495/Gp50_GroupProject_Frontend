import { Component, EventEmitter, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../SideBarService';
import { MatMenuModule } from '@angular/material/menu';
import { UserService } from 'src/app/shared/user.service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserData } from 'src/app/Model/UserInterface';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatMenuModule
  ]
})
export class HeaderComponent {
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();
  userData: UserData | undefined;
  userName: string | undefined;

  constructor(
    private sidebarService: SidebarService,
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.userData = this.userService.getUserData();

    if (this.userData) {
      localStorage.setItem('userData', JSON.stringify(this.userData));
    } else {
      const storedUserData = localStorage.getItem('userData');
      this.userData = storedUserData ? JSON.parse(storedUserData) : undefined;
    }
  }
  getUserRole(): string {
    const storedUserData = localStorage.getItem('userData');
    const userData = storedUserData ? JSON.parse(storedUserData) : undefined;
    return userData ? userData.UserRole : '';
  }
  
  getStoredUserName(): string {
    const storedUserData = localStorage.getItem('userData');
    const userData = storedUserData ? JSON.parse(storedUserData) : undefined;
    return userData ? userData.Name : '';
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  openProfile() {
    if (this.userData?.UserRole == "student") {
      this.router.navigate(['/student-profile']);
    } else if (this.userData?.UserRole == "teacher") {
      this.router.navigate(['/teacher-profile']);
    }
  }

  onLogout() {
    localStorage.removeItem('userName');
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