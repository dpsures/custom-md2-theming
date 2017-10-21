import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from './app.component';
import { BreakPointObserverService } from "./shared/services/breakpoint.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [BreakPointObserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
