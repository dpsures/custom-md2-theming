import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "./material.module";
import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const APP_ROUTES : Routes = [
    {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    {path:'dashboard', component: DashboardComponent}
];

@NgModule({
    imports: [MaterialModule, RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
    declarations: [DashboardComponent, HeaderComponent],
    providers: [],
})
export class AppRoutingModule { }
