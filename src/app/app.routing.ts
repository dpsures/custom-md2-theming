import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "./material.module";
import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

const APP_ROUTES : Routes = [
    {path:'', redirectTo:'/trainers', pathMatch:'full'},
    {path:'trainers', component: DashboardComponent,
        children: [
            {path:'', redirectTo:'home', pathMatch:'full'},
            {path: 'home', component: HomeComponent},
            {path:'about', component:AboutComponent}
        ]
    }
];

@NgModule({
    imports: [MaterialModule, RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
    declarations: [DashboardComponent, HeaderComponent, AboutComponent,
    HomeComponent],
    providers: [],
})
export class AppRoutingModule { }
