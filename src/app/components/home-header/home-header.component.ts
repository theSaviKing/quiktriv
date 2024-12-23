import { Component, inject, ViewEncapsulation } from "@angular/core";
import Typed from "typed.js";

@Component({
    selector: "qt-home-header",
    imports: [],
    template: `<div class="hidden" id="typed-strings">
            <p>Create Fun Quizzes.</p>
            <p>Play With Friends.</p>
            <p>Share With The World.</p>
        </div>
        <h1
            class="text-6xl leading-normal font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent inline-flex font-display"
            id="typed"
        ></h1>`,
    styles: `
    .typed-cursor, .typed-cursor--blink, .typed-fade-out {
        @apply text-6xl leading-normal rounded;
    }`,
    encapsulation: ViewEncapsulation.None,
})
export class HomeHeaderComponent {
    ngOnInit() {
        new Typed("#typed", {
            stringsElement: "#typed-strings",
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            fadeOut: true,
            loop: true,
        });
    }
}
