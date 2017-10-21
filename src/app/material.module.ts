import { NgModule } from '@angular/core';

import { 
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule
 } from "@angular/material";
 
 import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [
        MatToolbarModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule
    ],
    exports: [
        MatToolbarModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
