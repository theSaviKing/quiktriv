import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "@comp/footer/footer.component";
import { ThemeService } from "@app/services/theme/theme.service";

@Component({
    selector: "qt-root",
    imports: [RouterOutlet, FooterComponent],
    templateUrl: "./app.component.html",
})
export class AppComponent {
    title = "quiktriv";

    constructor(private themeService: ThemeService) {
        this.themeService = inject(ThemeService);
    }
}
