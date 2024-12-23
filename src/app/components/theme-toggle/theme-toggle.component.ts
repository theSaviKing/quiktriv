import { Component } from "@angular/core";
import { ThemeService } from "@serv/theme.service";
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
            class="btn bg-base-100 hover:bg-base-200"
        >
            @switch (theme) { @case ('system') {
            <lucide-angular [img]="MonitorIcon" />
            } @case ('light') {
            <lucide-angular [img]="SunIcon" />
            } @case ('dark') {
            <lucide-angular [img]="MoonIcon" />
            } }
        </div>
        <ul
            tabindex="0"
            class="menu dropdown-content mt-2 rounded-box z-10 p-2 shadow bg-base-200"
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
