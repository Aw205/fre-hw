import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-trailer-dialog',
  standalone: false,
  
  templateUrl: './trailer-dialog.component.html',
  styleUrl: './trailer-dialog.component.scss'
})
export class TrailerDialogComponent {

  data = inject(MAT_DIALOG_DATA);

}
