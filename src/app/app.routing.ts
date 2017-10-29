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
import { LearningMgmtComponent } from "./learning-mgmt/learning-mgmt.component";
import { LearningHeaderComponent } from "./learning-header/learning-header.component";
import { LearningHomeComponent } from "./learning-home/learning-home.component";
import { UserInfo } from "./learning/shared/services/user-info.object";
import { CourseModuleComponent } from "./course-module/course-module.component";
import { ModuleComponent } from "./module/module.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { ModuleHomeComponent } from "./module-pagination/module-home/module-home.component";
import { ModuleDashboardComponent } from "./module-pagination/module-dashboard/module-dashboard.component";
import { ModuleHeaderComponent } from "./module-pagination/module-header/module-header.component";
import { CoursesComponent } from "./module-pagination/courses/courses.component";
import { ModulesComponent } from "./module-pagination/modules/modules.component";
import { ModuleHomeService } from "./module-pagination/module-home/module-home.service";
import { ModulesPagination } from "./module-pagination/shared/subject/modules.subject";

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
    },
    {path: 'learning', component: LearningMgmtComponent,
        children: [
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {path: 'home', component: LearningHomeComponent},
            {path: 'add-course', component: AddCourseComponent}
        ]
    },
    {path: 'module', component: ModuleDashboardComponent, 
        children: [
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {path: 'home', component: ModuleHomeComponent},
            {path: 'details', component: CoursesComponent}
        ]
    }
];

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
    declarations: [DashboardComponent, HeaderComponent, AboutComponent,
    HomeComponent, CreateTutorialComponent, WeatherComponent, UserProfileComponent,RequestAccessComponent,
    LandingComponent,SignupComponent, TrendingBlogsComponent, TopTrainersComponent, LatestTechNewsComponent,
    ProgramSummaryComponent, ProgramDetailsComponent, ModuleSummaryComponent, ModuleDetailsComponent,
    LearningHeaderComponent, LearningHomeComponent, LearningMgmtComponent, ModuleComponent, CourseModuleComponent,
    AddCourseComponent, ModuleHomeComponent, ModuleDashboardComponent, ModulesComponent, CoursesComponent, ModuleHeaderComponent],
    providers: [WeatherService, ProgramDetailsService, ModuleSubject, ModuleDetailsService, UserInfo,
    ModuleHomeService, ModulesPagination],
    entryComponents:[CreateTutorialComponent, UserProfileComponent]
})
export class AppRoutingModule { }
