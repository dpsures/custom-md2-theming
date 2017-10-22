import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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

const APP_ROUTES : Routes = [
    {path:'', redirectTo:'/landing', pathMatch:'full'},
    {path: 'landing', component: LandingComponent},
    {path: 'signup', component: SignupComponent},
    {path:'trainers', component: DashboardComponent,
        children: [
            {path:'', redirectTo:'home', pathMatch:'full'},
            {path: 'home', component: HomeComponent},
            {path:'about', component: AboutComponent},
            {path: 'requestAccess', component: RequestAccessComponent}
        ]
    }
];

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, MaterialModule, RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
    declarations: [DashboardComponent, HeaderComponent, AboutComponent,
    HomeComponent, CreateTutorialComponent, WeatherComponent, UserProfileComponent,RequestAccessComponent,
    LandingComponent,SignupComponent],
    providers: [WeatherService],
    entryComponents:[CreateTutorialComponent, UserProfileComponent]
})
export class AppRoutingModule { }
