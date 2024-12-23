import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ThemeService {
    private theme: "system" | "light" | "dark";

    getTheme(): "system" | "light" | "dark" {
        return this.theme;
    }

    setTheme(newTheme: "system" | "light" | "dark") {
        this.theme = newTheme;

        if (this.theme === "system") {
            localStorage.removeItem("theme");
            document.documentElement.setAttribute(
                "data-theme",
                localStorage["theme"] === "dark" ||
                    (!("theme" in localStorage) &&
                        window.matchMedia("(prefers-color-scheme: dark)")
                            .matches)
                    ? "dark"
                    : "light"
            );
        } else {
            document.documentElement.setAttribute("data-theme", this.theme);
            localStorage["theme"] = this.theme;
        }
    }

    constructor() {
        this.theme =
            (localStorage["theme"] as "system" | "light" | "dark") ?? "system";
        this.setTheme(this.theme);
    }
}
