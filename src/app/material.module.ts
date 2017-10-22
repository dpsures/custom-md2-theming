import { NgModule } from '@angular/core';

import { 
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule
 } from "@angular/material";
 
 import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [
        MatToolbarModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule
    ],
    exports: [
        MatToolbarModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
