import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {} from '@angular/common';

import { 
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatMenuModule,
  MatTableModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
