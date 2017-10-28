import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

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
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoggerModule.forRoot({serverLoggingUrl: '', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF})
  ],
  providers: [BreakPointObserverService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
