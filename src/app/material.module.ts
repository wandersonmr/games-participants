import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatDialogModule,
  ],
  exports: [
    MatToolbarModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }
