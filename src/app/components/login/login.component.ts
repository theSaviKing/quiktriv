import { Component } from "@angular/core";
import { AuthService } from "@app/services/auth/auth.service";
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from "@angular/forms";
import { LucideAngularModule, Mail, Lock } from "lucide-angular";

@Component({
    selector: "qt-login",
    imports: [ReactiveFormsModule, LucideAngularModule],
    templateUrl: "./login.component.html",
    styles: ``,
})
export class LoginComponent {
    readonly Mail = Mail;
    readonly Lock = Lock;

    loginForm = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required]),
    });

    constructor(private authService: AuthService) {}

    onSubmit() {
        console.log(this.loginForm.value);
    }

    logInWithGoogle() {
        this.authService.logInWithGoogle();
    }
}
