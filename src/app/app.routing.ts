import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { CreateTutorialComponent } from "./create-tutorial/create-tutorial.component";
import { WeatherComponent } from "./weather/weather.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { WeatherService } from "./weather/weather.service";
import { RequestAccessComponent } from "./request-access/request-access.component";
import { LandingComponent } from "./landing/landing.component";
import { SignupComponent } from "./signup/signup.component";
import { TrendingBlogsComponent } from "./trending-blogs/trending-blogs.component";
import { TopTrainersComponent } from "./top-trainers/top-trainers.component";
import { LatestTechNewsComponent } from "./latest-tech-news/latest-tech-news.component";
import { ProgramDetailsComponent } from "./program-details/program-details.component";
import { ProgramSummaryComponent } from "./program-summary/program-summary.component";
import { ProgramDetailsService } from "./program-details/program-details.service";
import { ModuleSubject } from "./program-details/program-details.subject";
import { ModuleSummaryComponent } from "./module-summary/module-summary.component";
import { ModuleDetailsComponent } from "./module-details/module-details.component";
import { ModuleDetailsService } from "./module-details/module-details.service";

const APP_ROUTES : Routes = [
    {path:'', redirectTo:'/landing', pathMatch:'full'},
    {path: 'landing', component: LandingComponent},
    {path: 'signup', component: SignupComponent},
    {path:'trainers', component: DashboardComponent,
        children: [
            {path:'', redirectTo:'home', pathMatch:'full'},
            {path: 'home', component: HomeComponent},
            {path:'about', component: AboutComponent},
            {path: 'requestAccess', component: RequestAccessComponent},
            {path: 'program-details', component: ProgramDetailsComponent},
            {path: 'module-details', component: ModuleDetailsComponent}
        ]
    }
];

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
    declarations: [DashboardComponent, HeaderComponent, AboutComponent,
    HomeComponent, CreateTutorialComponent, WeatherComponent, UserProfileComponent,RequestAccessComponent,
    LandingComponent,SignupComponent, TrendingBlogsComponent, TopTrainersComponent, LatestTechNewsComponent,
    ProgramSummaryComponent, ProgramDetailsComponent, ModuleSummaryComponent, ModuleDetailsComponent],
    providers: [WeatherService, ProgramDetailsService, ModuleSubject, ModuleDetailsService],
    entryComponents:[CreateTutorialComponent, UserProfileComponent]
})
export class AppRoutingModule { }
