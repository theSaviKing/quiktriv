import { Routes } from "@angular/router";
import { PageHomeComponent } from "@pg/page-home/page-home.component";
import { AppLayoutComponent } from "./layouts/app-layout/app-layout.component";
import { PageQuizzesComponent } from "@pg/page-quizzes/page-quizzes.component";

export const routes: Routes = [
    {
        path: "app",
        component: AppLayoutComponent,
        children: [
            {
                path: "quizzes",
                component: PageQuizzesComponent,
            },
        ],
    },
    {
        path: "",
        component: PageHomeComponent,
    },
];
