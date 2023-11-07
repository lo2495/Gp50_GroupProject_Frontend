import { Component , EventEmitter, Output} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../SideBarService';
import { MatMenuModule } from '@angular/material/menu';
import { UserService } from 'src/app/shared/user.service.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userName = this.userService.getUserName();
  }
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  openProfile() {
    // Add your logic for opening the user's profile here
  }
  onLogout() {
    this.logout.emit();
  }
}
