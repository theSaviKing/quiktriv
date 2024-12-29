import { Component } from "@angular/core";
import { HomeHeadingComponent } from "@app/components/home-heading/home-heading.component";
import { LucideAngularModule, ArrowRight } from "lucide-angular";
import { HomeFeaturesComponent } from "@app/components/home-features/home-features.component";
import { ThemeToggleComponent } from "@app/components/theme-toggle/theme-toggle.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: "qt-page-home",
    imports: [
        HomeHeadingComponent,
        LucideAngularModule,
        HomeFeaturesComponent,
        ThemeToggleComponent,
        RouterLink,
    ],
    templateUrl: "./page-home.component.html",
    styles: ``,
})
export class PageHomeComponent {
    readonly ArrowRight = ArrowRight;
}
