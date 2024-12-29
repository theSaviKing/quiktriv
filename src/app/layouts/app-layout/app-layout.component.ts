import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { ThemeToggleComponent } from "@app/components/theme-toggle/theme-toggle.component";
import { AsyncPipe, NgIf } from "@angular/common";
import { LoginComponent } from "@app/components/login/login.component";
import { AuthService } from "@app/services/auth/auth.service";
import { UserButtonComponent } from "../../components/user-button/user-button.component";

@Component({
    selector: "qt-app-layout",
    imports: [
        RouterOutlet,
        RouterLink,
        ThemeToggleComponent,
        LoginComponent,
        NgIf,
        UserButtonComponent,
    ],
    templateUrl: "./app-layout.component.html",
})
export class AppLayoutComponent {
    isAuthenticated = false;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.user$.subscribe((user) => {
            this.isAuthenticated = !!user;
        });
    }
}
