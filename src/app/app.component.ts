import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ThemeToggleComponent } from "@comp/theme-toggle/theme-toggle.component";

@Component({
    selector: "qt-root",
    imports: [RouterOutlet, ThemeToggleComponent],
    templateUrl: "./app.component.html",
})
export class AppComponent {
    title = "quiktriv";
}
