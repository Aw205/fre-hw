import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    YouTubePlayerModule,
    NavbarComponent,
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
