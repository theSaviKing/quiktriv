import { Component } from "@angular/core";
import { AuthService } from "@app/services/auth/auth.service";
import { User } from "firebase/auth";

@Component({
    selector: "qt-user-button",
    imports: [],
    templateUrl: "./user-button.component.html",
})
export class UserButtonComponent {
    user: User | null = null;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.user$.subscribe((user) => {
            this.user = user;
        });
    }
}
