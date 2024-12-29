import { Component } from "@angular/core";
import { ThemeService } from "@app/services/theme/theme.service";
import { LucideAngularModule, Monitor, Sun, Moon } from "lucide-angular";

type Theme = "system" | "dark" | "light";

@Component({
    standalone: true,
    selector: "qt-theme-toggle",
    imports: [LucideAngularModule],
    template: `<div class="dropdown dropdown-end">
        <div
            tabindex="0"
            role="button"
            class="btn btn-square no-animation bg-base-100 hover:bg-base-200"
        >
            @switch (theme) {
                @case ("system") {
                    <lucide-angular class="h-5" [img]="MonitorIcon" />
                }
                @case ("light") {
                    <lucide-angular class="h-5" [img]="SunIcon" />
                }
                @case ("dark") {
                    <lucide-angular class="h-5" [img]="MoonIcon" />
                }
            }
        </div>
        <ul
            tabindex="0"
            class="menu dropdown-content z-10 mt-2 rounded-box bg-base-200 p-2 shadow"
        >
            <li><a (click)="toggleTheme('light')"> Light </a></li>
            <li><a (click)="toggleTheme('dark')">Dark</a></li>
            <li><a (click)="toggleTheme('system')">System</a></li>
        </ul>
    </div>`,
    styles: ``,
})
export class ThemeToggleComponent {
    readonly MonitorIcon = Monitor;
    readonly SunIcon = Sun;
    readonly MoonIcon = Moon;

    theme: "system" | "light" | "dark" = "system";

    constructor(private themeService: ThemeService) {
        this.theme = this.themeService.getTheme();
    }

    toggleTheme(newTheme: Theme) {
        this.theme = newTheme;
        this.themeService.setTheme(this.theme);
    }
}
