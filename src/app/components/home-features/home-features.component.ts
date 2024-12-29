import { Component } from "@angular/core";
import {
    LucideAngularModule,
    BadgePlus,
    MessageCircleQuestion,
    ChartNoAxesCombined,
    Share2,
} from "lucide-angular";

@Component({
    selector: "qt-home-features",
    imports: [LucideAngularModule],
    templateUrl: "./home-features.component.html",
    styles: ``,
})
export class HomeFeaturesComponent {
    readonly BadgePlus = BadgePlus;
    readonly MessageCircleQuestion = MessageCircleQuestion;
    readonly ChartNoAxesCombined = ChartNoAxesCombined;
    readonly Share = Share2;
}
