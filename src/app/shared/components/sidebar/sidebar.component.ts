import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [ 
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnChanges {
  @Input() isOpened: boolean = true;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  role: string | null = null;
  constructor(private cookieService: CookieService, private router: Router,private dialogService: DialogService) {
    this.role = this.cookieService.get('role');
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpened'] && this.sidenav) {
      if (this.isOpened) {
        this.sidenav.open();
      } else {
        this.sidenav.close();
      }
    }
  }

  toggleSidenav() {
    this.isOpened = !this.isOpened;
  }

  logout() {
    const message = `¿Está seguro de que deseas cerrar sesion?`;
    this.dialogService.confirmDialog(message,'Cerrar sesion').subscribe((confirmed) => {
      if (confirmed) {
        this.cookieService.delete('token');
        this.cookieService.delete('role');
        this.router.navigate(['/auth/login']);
      }
    });

  }
}
