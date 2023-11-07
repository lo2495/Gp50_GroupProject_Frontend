import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header-component/header.component';
import { SidebarService } from '../SideBarService';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'admin-sidenav-component',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HeaderComponent,
    AsyncPipe
  ]
})
export class AdminSideNavComponent {
  constructor(public sidebarService: SidebarService,
    private router: Router) { }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
