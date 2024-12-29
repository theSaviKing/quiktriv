import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PageQuizzesComponent } from "./page-quizzes.component";

describe("PageQuizzesComponent", () => {
    let component: PageQuizzesComponent;
    let fixture: ComponentFixture<PageQuizzesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PageQuizzesComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PageQuizzesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
