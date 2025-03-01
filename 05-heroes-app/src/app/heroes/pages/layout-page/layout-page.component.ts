import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public sideBarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadido', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

  get user(): User | undefined {
    return this.authService.currentUser;
  }
}
