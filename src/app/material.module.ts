import { NgModule } from '@angular/core';

import { 
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
 } from "@angular/material";
 
 import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [
        MatToolbarModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        MatToolbarModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
