import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header-component/header.component';
import { SidebarService } from '../SideBarService';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'teacher-sidenav-component',
  templateUrl: './teacher-sidenav.component.html',
  styleUrls: ['./teacher-sidenav.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HeaderComponent,
    AsyncPipe
  ]
})
export class TeacherSideNavComponent {
  constructor(public sidebarService: SidebarService,
    private router: Router) { }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
