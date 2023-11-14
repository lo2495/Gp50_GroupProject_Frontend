import { Component , EventEmitter, Output} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../SideBarService';
import { MatMenuModule } from '@angular/material/menu';
import { UserService } from 'src/app/shared/user.service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports:[
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatMenuModule
  ]
})
export class HeaderComponent {
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();
  userName: string | undefined;

  constructor(
    private sidebarService: SidebarService,
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') ?? ''; 
    if (!this.userName) {
      this.userName = this.userService.getUserName();
      localStorage.setItem('userName', this.userName); 
    }
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  openProfile() {
    // Implement the functionality to open the user's profile
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