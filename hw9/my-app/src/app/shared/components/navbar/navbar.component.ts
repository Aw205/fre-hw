import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    standalone: false
})
export class NavbarComponent {

    constructor(public authService: AuthService, private router: Router) { }

    onClick() {

        if (this.authService.username) {
            return this.authService.logOut();
        }
        this.router.navigate(['/login']);
    }

}
