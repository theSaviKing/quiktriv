import { Component, ViewEncapsulation } from "@angular/core";
import Typed from "typed.js";

@Component({
    selector: "qt-home-heading",
    imports: [],
    template: `<div class="hidden" id="typed-strings">
            <p>Create Fun Quizzes!</p>
            <p>Play With Friends!</p>
            <p>Share With The World!</p>
        </div>
        <h1
            class="gradient-r inline-flex bg-clip-text font-display text-6xl font-black leading-normal text-transparent after:ml-1 after:font-normal after:text-base-content after:content-['|']"
            id="typed"
        ></h1>`,
})
export class HomeHeadingComponent {
    ngOnInit() {
        new Typed("#typed", {
            stringsElement: "#typed-strings",
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2000,
            fadeOut: true,
            loop: true,
            showCursor: false,
        });
    }
}
